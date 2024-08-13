import { html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/button/text-button.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/dialog/dialog.js';

import { YpBaseElement } from '../common/yp-base-element.js';
import { Dialog } from '@material/web/dialog/internal/dialog.js';
import { TextField } from '@material/web/textfield/internal/text-field.js';


@customElement('yp-missing-email')
export class YpMissingEmail extends YpBaseElement {
  @property({ type: String })
  emailErrorMessage: string | undefined;

  @property({ type: String })
  passwordErrorMessage: string | undefined;

  @property({ type: Boolean })
  needPassword = false;

  @property({ type: Boolean })
  linkAccountText = false;

  @property({ type: Boolean })
  onlyConfirmingEmail = false;

  @property({ type: String })
  originalConfirmationEmail: string | undefined;

  @property({ type: String })
  email: string | undefined;

  @property({ type: String })
  password: string | undefined;

  @property({ type: String })
  heading: string | undefined;

  @property({ type: Object })
  target: HTMLElement | undefined;

  static override get styles() {
    return [
      super.styles,
      css`
        md-dialog {
          width: 420px;
        }

        .linkAccounts {
          padding-top: 16px;
        }

        @media (max-width: 480px) {
          md-dialog {
            padding: 0;
            margin: 0;
            width: 100%;
          }
        }

        [hidden] {
          display: none !important;
        }

        .buttons {
          margin-bottom: 8px;
          margin-right: 4px;
          text-align: center;
        }

        .setEmailInfo {
          font-size: 16px;
          font-weight: bold;
        }
      `,
    ];
  }

  override render() {
    return html`
      <div id="outer">
        <md-dialog id="dialog">
          <h2 slot="heading">${this.heading}</h2>
          <div slot="content">
          <div class="setEmailInfo">
            <span ?hidden="${!this.onlyConfirmingEmail}"
              >${this.t('user.setEmailConfirmationInfo')}</span
            >
            <span ?hidden="${this.onlyConfirmingEmail}"
              >${this.t('user.setEmailInfo')}</span
            >
          </div>
          <md-outlined-text-field
            id="email"
            @keydown="${this._onEnter}"
            type="email"
            .label="${this.t('user.email')}"
            .value="${this.email || ''}"
            .validationMessage="${this.emailErrorMessage || ''}">
          </md-outlined-text-field>

          ${this.needPassword
            ? html`
                <div class="linkAccounts">
                  ${this.t('user.existsLinkAccountInfo')}
                </div>
                <mmd-outlined-text-field
                  id="password"
                  type="password"
                  .label="${this.t('user.password')}"
                  .value="${this.password || ''}"
                  autocomplete="off"
                  .validationMessage="${this.passwordErrorMessage || ''}">
                </md-outlined-text-field>
              `
            : nothing}
          </div>
          <div class="buttons" slot="actions">
            <md-text-button
              @click="${this._logout}"
              .label="${this.t('user.logout')}"
              ?hidden="${this.onlyConfirmingEmail}"></md-text-button>
            <md-text-button
              @click="${this._forgotPassword}"
              ?hidden="${!this.needPassword}"
              .label="${this.t('user.newPassword')}"></md-text-button>
            <md-text-button
              raised
              @click="${this._notNow}"
              .label="${this.t('later')}"
              ?hidden="${this.onlyConfirmingEmail}"></md-text-button>
            <md-text-button
              raised
              id="sendButton"
              autofocus
              .label="${this.submitButtonLabel}"
              @click="${this._validateAndSend}">
            </md-text-button>
          </div>
        </md-dialog>
      </div>
    `;
  }

  get submitButtonLabel() {
    if (!this.linkAccountText) {
      if (this.onlyConfirmingEmail) {
        return this.t('confirm');
      } else {
        return this.t('user.setEmail');
      }
    } else {
      return this.t('user.linkAccount');
    }
  }

  _onEnter(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this._validateAndSend();
    }
  }

  _notNow() {
    window.appGlobals.activity('cancel', 'setEmail');
    (this.$$('#dialog') as Dialog).close();
  }

  _logout() {
    window.appGlobals.activity('logout', 'setEmail');
    window.appUser.logout();
  }

  _forgotPassword() {
    window.appGlobals.activity('open', 'forgotPasswordFromSetEmail');
    this.fireGlobal('yp-forgot-password', { email: this.email });
  }

  override connectedCallback() {
    super.connectedCallback();
    this.heading = this.t('user.setEmail');
  }

  get credentials() {
    const email = this.$$('#email') as TextField;
    const password = this.$$('#password') as TextField;

    return {
      email: email.value,
      password: password ? password.value : undefined,
    };
  }

  async _validateAndSend() {
    const email = this.$$('#email') as TextField;
    const password = this.$$('#password') as TextField;

    if (email && email.checkValidity()) {
      if (
        this.needPassword &&
        password &&
        password.checkValidity() &&
        password.value
      ) {
        window.appGlobals.activity('confirm', 'linkAccountsAjax');

        const response = (await window.serverApi.linkAccounts(
          this.credentials
        )) as YpLinkAccountResponse;

        if (response.accountLinked) {
          window.appGlobals.notifyUserViaToast(
            this.t('userHaveLinkedAccounts') + ' ' + response.email
          );
          window.appUser.checkLogin();
          this.close();
        } else {
          this.fire('yp-error', this.t('user.loginNotAuthorized'));
        }

        //TODO: Do we need this?
        //this.$$('#dialog').fire('iron-resize');
      } else {
        window.appGlobals.activity('confirm', 'setEmail');
        if (
          !this.originalConfirmationEmail ||
          this.originalConfirmationEmail != email.value
        ) {
          const response = (await window.serverApi.setEmail({
            email: email.value,
          })) as YpSetEmailResponse;
          if (response && response.alreadyRegistered) {
            this.needPassword = true;
            this.heading = this.t('user.linkAccount');
            this.linkAccountText = true;
            return true;
          } else {
            window.appGlobals.notifyUserViaToast(
              this.t('userHaveSetEmail') + ' ' + response.email
            );
            this.close();
            return true;
          }
          return true;
          //TODO: If we need this
          //this.$$('#dialog').fire('iron-resize');
        } else {
          window.appGlobals.notifyUserViaToast(
            this.t('userHaveSetEmail') + ' ' + email.value
          );
          this.close();
          return true;
        }
      }
    } else {
      this.fire('yp-error', this.t('user.completeForm'));
      return false;
    }
    return false;
  }

  open(onlyConfirming: boolean, email: string) {
    this.onlyConfirmingEmail = onlyConfirming;
    if (email) {
      this.email = email;
      this.originalConfirmationEmail = email;
    }
    (this.$$('#dialog') as Dialog).show();
    if (this.onlyConfirmingEmail) {
      window.serverApi.confirmEmailShown();
    }
  }

  close() {
    (this.$$('#dialog') as Dialog).close();
  }
}

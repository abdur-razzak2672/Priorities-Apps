var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, nothing } from "lit";
import { property, customElement } from "lit/decorators.js";
import { YpBaseElement } from "../common/yp-base-element.js";
import { ShadowStyles } from "../common/ShadowStyles.js";
import { YpCollectionHelpers } from "../common/YpCollectionHelpers.js";
import "../common/yp-image.js";
import "../yp-magic-text/yp-magic-text.js";
import "./yp-collection-stats.js";
import { YpNavHelpers } from "../common/YpNavHelpers.js";
let YpCollectionItemCard = class YpCollectionItemCard extends YpBaseElement {
    static get styles() {
        return [
            super.styles,
            ShadowStyles,
            css `
        .description {
          line-height: var(--description-line-height, 1.3);
          font-size: 15px;
          padding: 8px;
          padding: 16px;
        }

        .description[widetext] {
          font-size: 14px;
        }

        .description[largefont] {
          font-size: 16px;
        }

        .stats {
          position: absolute;
          bottom: 0;
          right: 38px;
        }

        .collectionCard {
          width: 860px;
          background-color: var(--md-sys-color-surface-container-high);
          color: var(--md-sys-color-on-surface);
          margin: 8px;
          position: relative;
          border-radius: 16px;
        }

        .collectionCard[featured] {
        }

        yp-image {
          width: 320px;
          height: 180px;
          border-radius: 16px 0 0 16px;
        }

        yp-image[featured] {
        }

        .card-content {
          padding: 0;
          padding-bottom: 48px;
        }

        yp-image {
          padding: 0;
          margin: 0;
        }

        yp-image {
          padding: 0;
          margin: 0;
        }

        .collectionCard {
          vertical-align: text-top;
        }

        .informationText {
          vertical-align: text-top;
        }

        .collection-name {
          font-size: var(--mdc-typography-headline2-font-size);
          font-weight: var(--mdc-typography-headline2-font-weight);
          cursor: pointer;
          padding: 16px;
          padding-bottom: 0;
          vertical-align: middle;
          width: auto;
          font-size: 22px;
        }

        .collection-name[widetext] {
          font-size: 18px;
        }

        .collection-name[largefont] {
          font-size: 20px;
        }

        yp-image[archived] {
        }

        yp-membership-button {
          position: absolute;
          top: 159px;
          right: 24px;
          width: 30px;
          height: 30px;
        }

        .edit {
          position: absolute;
          bottom: 0;
          right: 0;
          padding-right: 0;
          margin-right: 0;
          text-align: right;
        }

        .collection-name[featured] {
        }

        .collection-name[archived] {
        }

        .collection-name[has-data-viz] {
          padding-top: 26px;
        }

        yp-membership-button[archived] {
          display: none;
        }

        @media (max-width: 960px) {
          :host {
            max-width: 100%;
            width: 100%;
            padding-top: 0 !important;
            max-width: 430px;
          }

          yp-membership-button {
            top: 205px;
          }

          .collectionCard {
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            width: 100%;
            height: 100%;
            padding-bottom: 8px;
            max-width: 430px;
          }

          yp-image {
            width: 96vw;
            height: calc(96vw * 9 / 16);
            border-radius: 16px 16px 0px 0px;
            object-fit: cover;
            max-width: 430px;
            max-height: 242px;
          }

          yp-image[featured] {
          }

          .description {
            margin-bottom: 32px;
          }
        }

        @media (max-width: 420px) {


          yp-membership-button {
            top: 205px;
          }
        }

        @media (max-width: 375px) {

          yp-membership-button {
            top: 185px;
          }
        }

        @media (max-width: 360px) {

        }

        @media (max-width: 320px) {


          yp-membership-button {
            top: 155px;
          }
        }

        .withPointer {
          cursor: pointer;
        }

        [hidden] {
          display: none !important;
        }

        a {
          text-decoration: none;
        }
      `,
        ];
    }
    get archived() {
        return this.item?.status === "archived";
    }
    get featured() {
        return this.item?.status === "featured";
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.item && this.item.Community) {
            this.collection = this.item.Community;
            const group = this.collection;
            if (group.CommunityLink) {
                this.itemType = "groupCommunityLink";
            }
            else if (group.configuration.dataForVisualizationJson) {
                this.itemType = "groupDataViz";
            }
            else {
                this.itemType = "group";
            }
        }
        else if (this.item && this.item.Domain) {
            this.collection = this.item.Domain;
            this.itemType = "community";
        }
    }
    goToItem(event) {
        event.preventDefault();
        if (event.currentTarget && event.currentTarget) {
            const href = event.currentTarget.getAttribute("href");
            if (href) {
                YpNavHelpers.redirectTo(href);
            }
        }
    }
    _setupFontNameFontSize() {
        const collectionName = this.$$("#collectionName");
        if (collectionName && this.collection) {
            let classNames = "collection-name ";
            if (this.wide) {
                if (this.collection.name.length <= 18) {
                    classNames += "collectionNameFontSize4Wide";
                }
                else if (this.collection.name.length > 40) {
                    classNames += "collectionNameFontSize1Wide";
                }
                else if (this.collection.name.length > 30) {
                    classNames += "collectionNameFontSize2Wide";
                }
                else if (this.collection.name.length > 18) {
                    classNames += "collectionNameFontSize3Wide";
                }
            }
            else {
                if (this.collection.name.length <= 18) {
                    classNames += "collectionNameFontSize4Mobile";
                }
                else if (this.collection.name.length > 40) {
                    classNames += "collectionNameFontSize1Mobile";
                }
                else if (this.collection.name.length > 30) {
                    classNames += "collectionNameFontSize2Mobile";
                }
                else if (this.collection.name.length > 18) {
                    classNames += "collectionNameFontSize3Mobile";
                }
            }
            collectionName.className = classNames;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("collection") && this.collection) {
            //TODO: Check if we need to setTimeout here
            this._setupFontNameFontSize();
        }
    }
    renderLogoImage() {
        return html `
      ${YpCollectionHelpers.logoImagePath(this.itemType, this.item)
            ? html `
            <yp-image
              sizing="cover"
              ?archived="${this.archived}"
              alt="${this.collection.name}"
              ?featured="${this.featured}"
              preload
              .src="${YpCollectionHelpers.logoImagePath(this.itemType, this.item)}"
              class="post-image withPointer"
            ></yp-image>
          `
            : html `
            <yp-image
              ?archived="${this.archived}"
              sizing="cover"
              class="main-image withPointer"
              src="https://i.imgur.com/sdsFAoT.png"
            ></yp-image>
          `}
    `;
    }
    renderDataViz() {
        return html `
      <yp-data-visualization
        small
        .data="${this.item.configuration
            .dataForVisualizationJson}"
      ></yp-data-visualization>
    `;
    }
    renderCardInfo() {
        return html `
      <div class="layout horizontal wrap">
        ${this.itemType === "groupDataViz"
            ? html ` ${this.renderDataViz()} `
            : html ` ${this.renderLogoImage()} `}
        <div class="informationText layout vertical flex">
          <yp-magic-text
            id="collectionName"
            class="collection-name"
            ?archived="${this.archived}"
            ?featured="${this.featured}"
            ?largefont="${this.largeFont}"
            @click="${this.goToItem}"
            .textType="${YpCollectionHelpers.nameTextType(this.itemType)}"
            .contentLanguage="${this.contentLanguage}"
            ?disableTranslation="${this.collection.configuration
            ?.disableNameAutoTranslation}"
            textOnly
            .content="${this.contentName}"
            .contentId="${this.contentId}"
          ></yp-magic-text>
          <yp-magic-text
            id="description"
            class="description layout vertical withPointer"
            ?featured="${this.featured}"
            ?largefont="${this.largeFont}"
            textType="collectionContent"
            .textType="${YpCollectionHelpers.descriptionTextType(this.itemType)}"
            .contentLanguage="${this.contentLanguage}"
            textOnly
            removeUrls
            .content="${this.contentDescription}"
            .contentId="${this.contentId}"
            truncate="300"
          >
          </yp-magic-text>
        </div>

        <div class="stats layout horizontal">
          <yp-collection-stats
            .collectionType="${this.statsCollectionType}"
            .collection="${this.statsCollection}"
          ></yp-collection-stats>
        </div>

        ${!this.collection
            ? html `
              <yp-membership-button
                .archived="${this.archived}"
                .featured="${this.featured}"
                .collection="${this.collection}"
              ></yp-membership-button>
            `
            : html ``}
      </div>
    `;
    }
    get statsCollection() {
        if (this.itemType === "groupCommunityLink") {
            return this.item.CommunityLink;
        }
        else {
            return this.item;
        }
    }
    get statsCollectionType() {
        if (this.itemType === "groupCommunityLink") {
            return "communtiy";
        }
        else if (this.itemType === "groupDataViz") {
            return "group";
        }
        else {
            return this.itemType;
        }
    }
    get contentDescription() {
        if (this.itemType === "groupCommunityLink") {
            return this.item.CommunityLink.description;
        }
        else {
            return this.item.description || this.item.objectives;
        }
    }
    get contentName() {
        if (this.itemType === "groupCommunityLink") {
            return this.item.CommunityLink.name;
        }
        else {
            return this.item.name;
        }
    }
    get contentId() {
        if (this.itemType === "groupCommunityLink") {
            return this.item.CommunityLink.id;
        }
        else {
            return this.item.id;
        }
    }
    get contentLanguage() {
        if (this.itemType === "groupCommunityLink") {
            return this.item.CommunityLink.language;
        }
        else {
            return this.item.language;
        }
    }
    get contentUrlBase() {
        if (this.itemType === "groupCommunityLink") {
            return "community";
        }
        else if (this.itemType === "groupDataViz") {
            return "group_data_viz";
        }
        else {
            return this.itemType;
        }
    }
    render() {
        return this.item && this.collection
            ? html `
          <a
            href="/${this.contentUrlBase}/${this.contentId}"
            @click="${this.goToItem}"
            class="layout vertical center-center"
          >
            <div
              ?featured="${this.featured}"
              class="collectionCard layout horizontal"
            >
              ${this.renderCardInfo()}
            </div>
          </a>
        `
            : nothing;
    }
};
__decorate([
    property({ type: Object })
], YpCollectionItemCard.prototype, "item", void 0);
__decorate([
    property({ type: String })
], YpCollectionItemCard.prototype, "itemType", void 0);
__decorate([
    property({ type: Object })
], YpCollectionItemCard.prototype, "collection", void 0);
YpCollectionItemCard = __decorate([
    customElement("yp-collection-item-card")
], YpCollectionItemCard);
export { YpCollectionItemCard };
//# sourceMappingURL=yp-collection-item-card.js.map
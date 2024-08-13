import { html, css, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import './yp-group.js';

import "@material/web/icon/icon.js";
import { YpGroup } from './yp-group.js';

@customElement('yp-group-data-viz')
export class YpGroupDataViz extends YpGroup {
  override render() {
    return html`
      ${this.renderHeader()}
      ${this.collection
        ? html`
            <yp-data-visualization
              .group="${this.collection as YpGroupData}"
            ></yp-data-visualization>
          `
        : nothing}
    `;
  }
}

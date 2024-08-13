var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { PlausibleHistorical } from '../pl-components/pl-historical.js';
import '../pl-components/stats/graph/pl-goal-graph.js';
import './yp-campaigns-analytics.js';
import '@material/web/iconbutton/icon-button.js';
import { highlightedGoals } from './ypHighlightedGoals.js';
let YpHistorical = class YpHistorical extends PlausibleHistorical {
    static get styles() {
        return [...super.styles, css ``];
    }
    constructor() {
        super();
        this.highlightedGoals = highlightedGoals;
    }
    render() {
        const navClass = this.site.embedded ? 'relative' : 'sticky';
        return html `
      <div class="mb-12">
        <div id="stats-container-top"></div>
        <div
          class=${`${navClass} top-0 sm:py-3 py-2 z-10 ${this.stuck && !this.site.embedded
            ? 'fullwidth-shadow bg-gray-50 dark:bg-gray-850'
            : ''}`}
        >
          <div class="items-center w-full flex">
            <div class="flex items-center w-full">
              ${!this.wide
            ? html `
                    <md-icon-button
                      icon="close"
                      @click="${() => this.fire('exit-to-app')}"
                    ></md-icon-button>
                  `
            : nothing}
              <pl-current-visitors
                .timer=${this.timer}
                .site=${this.site}
                .query=${this.query}
                useTopStatsForCurrentVisitors
                class="w-full"
                .proxyUrl="${this.proxyUrl}"
              ></pl-current-visitors>
              <div class="flex w-full"></div>
              <pl-filters
                class="flex"
                .site=${this.site}
                .query="${this.query}"
                .history="${this.history}"
              ></pl-filters>
            </div>
            <pl-date-picker
              .site="${this.site}"
              .query="${this.query}"
              .history="${this.history}"
            ></pl-date-picker>
          </div>
        </div>
        <pl-visitors-graph
          .site="${this.site}"
          .query="${this.query}"
          .proxyUrl="${this.proxyUrl}"
          useTopStatsForCurrentVisitors
        ></pl-visitors-graph>
        <yp-campaigns-analytics
          .site="${this.site}"
          .query="${this.query}"
          .proxyUrl="${this.proxyUrl}"
          .collectionType="${this.collectionType}"
          .collectionId="${this.collectionId}"
        ></yp-campaigns-analytics>
        <pl-goal-graph
          .events="${[
            'newPost - completed',
            'newPointAgainst - completed',
            'newPointFor - completed',
        ]}"
          .chartTitle="${this.t('Users who added content')}"
          .query="${this.query}"
          .proxyUrl="${this.proxyUrl}"
          .site="${this.site}"
          gradientColorStop1="rgba(205,116,101, 0.2)"
          gradientColorStop2="rgba(205,116,101, 0.2)"
          prevGradientColorStop1="rgba(205,116,101, 0.075)"
          prevGradientColorStop2="rgba(205,116,101, 0)"
          borderColor="rgba(205,116,101)"
          pointBackgroundColor="rgba(205,116,101)"
          pointHoverBackgroundColor="rgba(193, 87, 71)"
          prevPointHoverBackgroundColor="rgba(166,187,210,0.8)"
          prevBorderColor="rgba(210,187,166,0.5)"
          .chartHeigh="${this.wide ? 200 : 300}"
        >
        </pl-goal-graph>
        <pl-goal-graph
          .events="${[
            'endorse_up - completed',
            'endorse_down - completed',
            'pointHelpful - completed',
            'pointNotHelpful - completed',
            'post.ratings - add',
        ]}"
          .chartTitle="${this.t('Users who rated content')}"
          .query="${this.query}"
          .proxyUrl="${this.proxyUrl}"
          .site="${this.site}"
          .chartHeigh="${this.wide ? 200 : 300}"
        >
        </pl-goal-graph>

        <div
          class="items-start justify-between block w-full md:flex flex flex-wrap"
        >
          <pl-sources-list
            class="flex-col"
            .site="${this.site}"
            alwaysShowNoRef
            .query="${this.query}"
            .proxyUrl="${this.proxyUrl}"
            .proxyFaviconBaseUrl="${this.proxyFaviconBaseUrl}"
          ></pl-sources-list>
          <pl-pages
            ?hidden="${this.collectionType == "post" && !this.wide}"
            class="flex-col"
            .site="${this.site}"
            .query="${this.query}"
            .proxyUrl="${this.proxyUrl}"
          ></pl-pages>
        </div>
        <div
          class="items-start justify-between block w-full md:flex flex flex-wrap"
        >
          <pl-locations
            .site="${this.site}"
            .query="${this.query}"
            .proxyUrl="${this.proxyUrl}"
          ></pl-locations>
          <pl-devices
            .site="${this.site}"
            .query="${this.query}"
            .proxyUrl="${this.proxyUrl}"
          ></pl-devices>
        </div>
        ${this.renderConversions()}
      </div>
    `;
    }
};
__decorate([
    property({ type: Object })
], YpHistorical.prototype, "collection", void 0);
__decorate([
    property({ type: String })
], YpHistorical.prototype, "collectionType", void 0);
__decorate([
    property({ type: Number })
], YpHistorical.prototype, "collectionId", void 0);
YpHistorical = __decorate([
    customElement('yp-historical')
], YpHistorical);
export { YpHistorical };
//# sourceMappingURL=yp-historical.js.map
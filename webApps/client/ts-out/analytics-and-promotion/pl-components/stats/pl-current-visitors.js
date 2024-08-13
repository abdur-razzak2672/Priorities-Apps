var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as api from "../api";
import * as url from "../util/url";
import { appliedFilters } from "../query";
import { css, html, nothing } from "lit";
import { property, customElement } from "lit/decorators.js";
import { PlausibleBaseElementWithState } from "../pl-base-element-with-state";
import structuredClone from "@ungap/structured-clone";
let PlausibleCurrentVisitors = class PlausibleCurrentVisitors extends PlausibleBaseElementWithState {
    constructor() {
        super(...arguments);
        //TODO: This is a workaround to until current-visitors API supports custom properties
        this.useTopStatsForCurrentVisitors = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.timer.onTick(this.updateCount.bind(this));
        this.updateCount();
    }
    static get styles() {
        return [
            ...super.styles,
            css `
        pl-link {
          width: 100%;
        }

        [hidden] {
          display: none !important;
        }
      `,
        ];
    }
    updateCount() {
        if (this.useTopStatsForCurrentVisitors) {
            const query = structuredClone(this.query);
            query["period"] = "realtime";
            return api
                .get(this.proxyUrl, `/api/stats/${encodeURIComponent(this.site.domain)}/top-stats`, query)
                .then((res) => {
                this.currentVisitors = res.top_stats[1].value;
            })
                .catch((e) => {
                console.error(e);
                return null;
            });
        }
        else {
            return api
                .get(this.proxyUrl, `/api/stats/${encodeURIComponent(this.site.domain)}/current-visitors`, {})
                .then((res) => {
                this.currentVisitors = res;
            })
                .catch((e) => {
                console.error(e);
                return null;
            });
        }
    }
    render() {
        if (appliedFilters(this.query).length >= 1) {
            return null;
        }
        if (this.currentVisitors !== null) {
            return html `
        <pl-link
          .to=${{ search: url.setQuerySearch("period", "realtime") }}
          class="block ml-1 md:ml-2 mr-auto text-xs md:text-sm font-bold text-gray-500 dark:text-gray-300"
        >
          <svg
            class="inline w-2 mr-1 md:mr-2 text-green-500 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
          ${this.currentVisitors}
          <span ?hidden="${!this.wide}" class=" sm:inline-block"
            >${this.currentVisitors === 1
                ? this.t("current visitor")
                : this.t("current visitors")}</span
          >
        </pl-link>
      `;
        }
        else {
            return nothing;
        }
    }
};
__decorate([
    property({ type: Number })
], PlausibleCurrentVisitors.prototype, "currentVisitors", void 0);
__decorate([
    property({ type: Boolean })
], PlausibleCurrentVisitors.prototype, "useTopStatsForCurrentVisitors", void 0);
PlausibleCurrentVisitors = __decorate([
    customElement("pl-current-visitors")
], PlausibleCurrentVisitors);
export { PlausibleCurrentVisitors };
//# sourceMappingURL=pl-current-visitors.js.map
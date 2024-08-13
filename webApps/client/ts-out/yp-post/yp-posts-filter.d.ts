import { YpBaseElement } from "../common/yp-base-element.js";
import "../common/yp-image.js";
import "@material/web/icon/icon.js";
import "@material/web/select/outlined-select.js";
import "@material/web/select/select-option.js";
export declare class YpPostsFilter extends YpBaseElement {
    group: YpGroupData;
    filterName: string | undefined;
    filter: string;
    categoryId: number | undefined;
    categoryName: string | undefined;
    subTitle: string;
    searchingFor: string | undefined;
    showFilter: boolean;
    postsCount: number | undefined;
    allPostCount: number;
    tabName: string | undefined;
    category: YpCategoryData | undefined;
    categoriesWithCount: Array<YpCategoryData> | undefined;
    static get styles(): any[];
    render(): import("lit-html").TemplateResult<1>;
    _getCategoryCount(id: number, categoryCounts: Array<YpCategoriesCount>): number;
    _oldCategory(category: YpCategoryData): boolean;
    _openDropDown(): void;
    openFilter(): void;
    _languageEvent(event: CustomEvent): void;
    searchFor(value: string): void;
    _updateTitle(): void;
    _changeFilter(event: CustomEvent): Promise<void>;
    _changeCategory(event: CustomEvent): void;
    buildPostsUrlPath(): string;
    _updateAfterFiltering(): void;
    _ifCategories(): boolean | undefined;
    resetSelection(id?: string | undefined): void;
    _setupCategories(): Promise<void>;
    _updateMainListMenuValue(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    chunk(input: Array<any>, size: number): any;
    _categoryItems(): any;
    _categoryImageSrc(category: YpCategoryData): any;
}
//# sourceMappingURL=yp-posts-filter.d.ts.map
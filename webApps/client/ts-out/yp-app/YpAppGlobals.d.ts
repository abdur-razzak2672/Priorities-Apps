import { YpServerApi } from "../common/YpServerApi.js";
import { YpCodeBase } from "../common/YpCodeBaseclass.js";
import { YpRecommendations } from "./YpRecommendations.js";
import { YpCache } from "./YpCache.js";
import { YpOffline } from "./YpOffline.js";
import { YpAnalytics } from "./YpAnalytics.js";
import { YpThemeManager } from "./YpThemeManager.js";
export declare class YpAppGlobals extends YpCodeBase {
    seenWelcome: boolean;
    resetSeenWelcome: boolean;
    disableWelcome: boolean;
    activityHost: string;
    domain: YpDomainData | undefined;
    groupConfigOverrides: Record<number, Record<string, string | boolean>>;
    currentAnonymousUser: YpUserData | undefined;
    currentGroup: YpGroupData | undefined;
    registrationQuestionsGroup: YpGroupData | undefined;
    currentAnonymousGroup: YpGroupData | undefined;
    currentForceSaml: boolean;
    disableFacebookLoginForGroup: boolean;
    googleMapsApiKey: string | undefined;
    hasLlm: boolean;
    currentSamlDeniedMessage: string | undefined;
    currentSamlLoginMessage: string | undefined;
    originalQueryParameters: Record<string, string | number | undefined>;
    externalGoalTriggerGroupId: number | undefined;
    externalGoalCounter: number;
    appStartTime: Date;
    autoTranslate: boolean;
    goalTriggerEvents: Array<string>;
    haveLoadedLanguages: boolean;
    hasTranscriptSupport: boolean;
    hasVideoUpload: boolean;
    hasAudioUpload: boolean;
    locale: string | undefined;
    i18nTranslation: any | undefined;
    serverApi: YpServerApi;
    recommendations: YpRecommendations;
    cache: YpCache;
    offline: YpOffline;
    analytics: YpAnalytics;
    theme: YpThemeManager;
    highlightedLanguages: string | undefined;
    magicTextIronResizeDebouncer: number | undefined;
    signupTermsPageId: number | undefined;
    retryMethodAfter401Login: Function | undefined;
    groupLoadNewPost: boolean;
    constructor(serverApi: YpServerApi, disableInit?: boolean);
    showRecommendationInfoIfNeeded(): void;
    showSpeechToTextInfoIfNeeded(): void;
    hasVideoUploadSupport(): Promise<void>;
    sendVideoView(videoId: number | string): void;
    sendLongVideoView(videoId: number | string): void;
    hasAudioUploadSupport(): Promise<void>;
    sendAudioListen(audioId: number | string): void;
    sendLongAudioListen(audioId: number | string): void;
    changeLocaleIfNeededAfterWait(locale: string, force: boolean): void;
    setHighlightedLanguages(languages: string | undefined): void;
    changeLocaleIfNeeded(locale: string, force?: boolean): void;
    parseQueryString(): void;
    setAnonymousUser(user: YpUserData | undefined): void;
    setRegistrationQuestionGroup(group: YpGroupData | undefined): void;
    setAnonymousGroupStatus(group: YpGroupData | undefined): void;
    _domainChanged(domain: YpDomainData | undefined): void;
    notifyUserViaToast(text: string): void;
    reBoot(): void;
    _userLoggedIn(event: CustomEvent): void;
    setupTranslationSystem(loadPathPrefix?: string): void;
    startTranslation(): void;
    stopTranslation(): void;
    boot(): Promise<void>;
    setupGroupConfigOverride(groupId: number, configOverride: string): void;
    overrideGroupConfigIfNeeded(groupId: number, configuration: YpGroupConfiguration): YpGroupConfiguration;
    postLoadGroupProcessing(group: YpGroupData): void;
    checkExternalGoalTrigger(type: string): void;
    activity(type: string, object?: object | string | undefined, context?: string | object | number | undefined, target?: string | object | undefined): void;
    setSeenWelcome(): void;
    getSessionFromCookie(): string;
}
//# sourceMappingURL=YpAppGlobals.d.ts.map
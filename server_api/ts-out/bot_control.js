const badBotsList = [
    /01h4x.com/,
    /360spider/,
    /404checker/,
    /404enemy/,
    /80legs/,
    /admantx/,
    /aibot/,
    /alittle client/,
    /aspseek/,
    /abonti/,
    /aboundex/,
    /aboundexbot/,
    /acunetix/,
    /afd-verbotsverfahren/,
    /ahrefsbot/,
    /aihitbot/,
    /aipbot/,
    /alexibot/,
    /allsubmitter/,
    /alligator/,
    /alphabot/,
    /anarchie/,
    /anarchy/,
    /anarchy99/,
    /ankit/,
    /anthill/,
    /apexoo/,
    /aspiegel/,
    /asterias/,
    /atomseobot/,
    /attach/,
    /awariorssbot/,
    /awariosmartbot/,
    /bbbike/,
    /bdcbot/,
    /bdfetch/,
    /blexbot/,
    /backdoorbot/,
    /backstreet/,
    /backweb/,
    /backlink-ceck/,
    /backlinkcrawler/,
    /badass/,
    /bandit/,
    /barkrowler/,
    /batchftp/,
    /battleztar bazinga/,
    /betabot/,
    /bigfoot/,
    /bitacle/,
    /blackwidow/,
    /black hole/,
    /blackboard/,
    /blow/,
    /blowfish/,
    /boardreader/,
    /bolt/,
    /botalot/,
    /brandprotect/,
    /brandwatch/,
    /buck/,
    /buddy/,
    /builtbottough/,
    /builtwith/,
    /bullseye/,
    /bunnyslippers/,
    /buzzsumo/,
    /catexplorador/,
    /code87/,
    /cshttp/,
    /calculon/,
    /cazoodlebot/,
    /cegbfeieh/,
    /censysinspect/,
    /cheteam/,
    /cheesebot/,
    /cherrypicker/,
    /chinaclaw/,
    /chlooe/,
    /citoid/,
    /claritybot/,
    /cliqzbot/,
    /cloud mapping/,
    /cocolyzebot/,
    /cogentbot/,
    /collector/,
    /copier/,
    /copyrightcheck/,
    /copyscape/,
    /cosmos/,
    /craftbot/,
    /crawling at home project/,
    /crazywebcrawler/,
    /crescent/,
    /crunchbot/,
    /curious/,
    /custo/,
    /cyotekwebcopy/,
    /dblbot/,
    /diibot/,
    /dsearch/,
    /dts agent/,
    /datacha0s/,
    /databasedrivermysqli/,
    /demon/,
    /deusu/,
    /devil/,
    /digincore/,
    /digitalpebble/,
    /dirbuster/,
    /disco/,
    /discobot/,
    /discoverybot/,
    /dispatch/,
    /dittospyder/,
    /dnbcrawler-analytics/,
    /dnyzbot/,
    /domcopbot/,
    /domainappender/,
    /domaincrawler/,
    /domainsigmacrawler/,
    /domainstatsbot/,
    /domains project/,
    /dotbot/,
    /download wonder/,
    /dragonfly/,
    /drip/,
    /eccp\/1.0/,
    /email siphon/,
    /email wolf/,
    /easydl/,
    /ebingbong/,
    /ecxi/,
    /eirgrabber/,
    /erocrawler/,
    /evil/,
    /exabot/,
    /express webpictures/,
    /extlinksbot/,
    /extractor/,
    /extractorpro/,
    /extreme picture finder/,
    /eyenetie/,
    /ezooms/,
    /fdm/,
    /fhscan/,
    /femtosearchbot/,
    /fimap/,
    /firefox\/7.0/,
    /flashget/,
    /flunky/,
    /foobot/,
    /freeuploader/,
    /frontpage/,
    /fuzz/,
    /fyberspider/,
    /fyrebot/,
    /g-i-g-a-b-o-t/,
    /gt::www/,
    /galaxybot/,
    /genieo/,
    /germcrawler/,
    /getright/,
    /getweb/,
    /getintent/,
    /gigabot/,
    /go!zilla/,
    /go-ahead-got-it/,
    /gozilla/,
    /gotit/,
    /grabnet/,
    /grabber/,
    /grafula/,
    /grapefx/,
    /grapeshotcrawler/,
    /gridbot/,
    /headmasterseo/,
    /hmview/,
    /htmlparser/,
    /http::lite/,
    /httrack/,
    /haansoft/,
    /haosouspider/,
    /harvest/,
    /havij/,
    /heritrix/,
    /hloader/,
    /honolulubot/,
    /humanlinks/,
    /hybridbot/,
    /idbte4m/,
    /idbot/,
    /irlbot/,
    /iblog/,
    /id-search/,
    /ilsebot/,
    /image fetch/,
    /image sucker/,
    /indeedbot/,
    /indy library/,
    /infonavirobot/,
    /infotekies/,
    /intelliseek/,
    /interget/,
    /internetseer/,
    /internet ninja/,
    /iria/,
    /iskanie/,
    /istellabot/,
    /joc web spider/,
    /jamesbot/,
    /jbrofuzz/,
    /jennybot/,
    /jetcar/,
    /jetty/,
    /jikespider/,
    /joomla/,
    /jorgee/,
    /justview/,
    /jyxobot/,
    /kenjin spider/,
    /keybot translation-search-machine/,
    /keyword density/,
    /kinza/,
    /kozmosbot/,
    /lnspiderguy/,
    /lwp::simple/,
    /lanshanbot/,
    /larbin/,
    /leap/,
    /leechftp/,
    /leechget/,
    /lexibot/,
    /lftp/,
    /libweb/,
    /libwhisker/,
    /liebaofast/,
    /lightspeedsystems/,
    /likse/,
    /linkscan/,
    /linkwalker/,
    /linkbot/,
    /linkextractorpro/,
    /linkpadbot/,
    /linksmanager/,
    /linqiametadatadownloaderbot/,
    /linqiarssbot/,
    /linqiascrapebot/,
    /lipperhey/,
    /lipperhey spider/,
    /litemage_walker/,
    /lmspider/,
    /ltx71/,
    /mfc_tear_sample/,
    /midown tool/,
    /miixpc/,
    /mj12bot/,
    /mqqbrowser/,
    /msfrontpage/,
    /msiecrawler/,
    /mtrobot/,
    /mag-net/,
    /magnet/,
    /mail.ru_bot/,
    /majestic-seo/,
    /majestic12/,
    /majestic seo/,
    /markmonitor/,
    /markwatch/,
    /mass downloader/,
    /masscan/,
    /mata hari/,
    /mauibot/,
    /mb2345browser/,
    /meanpath bot/,
    /meanpathbot/,
    /mediatoolkitbot/,
    /megaindex.ru/,
    /metauri/,
    /micromessenger/,
    /microsoft data access/,
    /microsoft url control/,
    /minefield/,
    /mister pix/,
    /moblie safari/,
    /mojeek/,
    /mojolicious/,
    /molokaibot/,
    /morfeus fucking scanner/,
    /mozlila/,
    /mr.4x3/,
    /msrabot/,
    /musobot/,
    /nicerspro/,
    /npbot/,
    /name intelligence/,
    /nameprotect/,
    /navroad/,
    /nearsite/,
    /needle/,
    /nessus/,
    /netants/,
    /netlyzer/,
    /netmechanic/,
    /netspider/,
    /netzip/,
    /net vampire/,
    /netcraft/,
    /nettrack/,
    /netvibes/,
    /nextgensearchbot/,
    /nibbler/,
    /niki-bot/,
    /nikto/,
    /nimblecrawler/,
    /nimbostratus/,
    /ninja/,
    /nmap/,
    /nuclei/,
    /nutch/,
    /octopus/,
    /offline explorer/,
    /offline navigator/,
    /openlinkprofiler/,
    /openvas/,
    /openfind/,
    /openvas/,
    /orangebot/,
    /orangespider/,
    /outclicksbot/,
    /outfoxbot/,
    /pecl::http/,
    /phpcrawl/,
    /poe-component-client-http/,
    /pageanalyzer/,
    /pagegrabber/,
    /pagescorer/,
    /pagething.com/,
    /page analyzer/,
    /pandalytics/,
    /panscient/,
    /papa foto/,
    /pavuk/,
    /peoplepal/,
    /petalbot/,
    /pi-monster/,
    /picscout/,
    /picsearch/,
    /picturefinder/,
    /piepmatz/,
    /pimonster/,
    /pixray/,
    /pleasecrawl/,
    /pockey/,
    /propowerbot/,
    /prowebwalker/,
    /probethenet/,
    /psbot/,
    /pu_in/,
    /pump/,
    /pxbroker/,
    /pycurl/,
    /queryn metasearch/,
    /quick-crawler/,
    /rssingbot/,
    /rankactive/,
    /rankactivelinkbot/,
    /rankflex/,
    /rankingbot/,
    /rankingbot2/,
    /rankivabot/,
    /rankurbot/,
    /re-re/,
    /reget/,
    /realdownload/,
    /reaper/,
    /rebelmouse/,
    /recorder/,
    /redesscrapy/,
    /repomonkey/,
    /ripper/,
    /rocketcrawler/,
    /rogerbot/,
    /sbider/,
    /seokicks/,
    /seokicks-robot/,
    /seolyticscrawler/,
    /seoprofiler/,
    /seostats/,
    /sistrix/,
    /smtbot/,
    /salesintelligent/,
    /scanalert/,
    /scanbot/,
    /scoutjet/,
    /scrapy/,
    /screaming/,
    /screenerbot/,
    /screpybot/,
    /searchestate/,
    /searchmetricsbot/,
    /seekport/,
    /semanticjuice/,
    /semrush/,
    /semrushbot/,
    /sentibot/,
    /seositecheckup/,
    /seobilitybot/,
    /seomoz/,
    /shodan/,
    /siphon/,
    /sitecheckerbotcrawler/,
    /siteexplorer/,
    /sitelockspider/,
    /sitesnagger/,
    /sitesucker/,
    /site sucker/,
    /sitebeam/,
    /siteimprove/,
    /sitevigil/,
    /slysearch/,
    /smartdownload/,
    /snake/,
    /snapbot/,
    /snoopy/,
    /socialrankiobot/,
    /sociscraper/,
    /sogou web spider/,
    /sosospider/,
    /sottopop/,
    /spacebison/,
    /spammen/,
    /spankbot/,
    /spanner/,
    /spbot/,
    /spinn3r/,
    /sputnikbot/,
    /sqlmap/,
    /sqlworm/,
    /sqworm/,
    /steeler/,
    /stripper/,
    /sucker/,
    /sucuri/,
    /superbot/,
    /superhttp/,
    /surfbot/,
    /surveybot/,
    /suzuran/,
    /swiftbot/,
    /szukacz/,
    /t0phackteam/,
    /t8abot/,
    /teleport/,
    /teleportpro/,
    /telesoft/,
    /telesphoreo/,
    /telesphorep/,
    /thenomad/,
    /the intraformant/,
    /thumbor/,
    /tighttwatbot/,
    /titan/,
    /toata/,
    /toweyabot/,
    /tracemyfile/,
    /trendiction/,
    /trendictionbot/,
    /true_robot/,
    /turingos/,
    /turnitin/,
    /turnitinbot/,
    /twengabot/,
    /twice/,
    /typhoeus/,
    /urly.warning/,
    /urly warning/,
    /unisterbot/,
    /upflow/,
    /v-bot/,
    /vb project/,
    /vacuum/,
    /vagabondo/,
    /velenpublicwebcrawler/,
    /vericitecrawler/,
    /vidiblescraper/,
    /virusdie/,
    /voideye/,
    /voil/,
    /voltron/,
    /wasalive-bot/,
    /wbsearchbot/,
    /webdav/,
    /wisenutbot/,
    /wpscan/,
    /www-collector-e/,
    /www-mechanize/,
    /www::mechanize/,
    /wwwoffle/,
    /wallpapers/,
    /wallpapers\/3.0/,
    /wallpapershd/,
    /wesee/,
    /webauto/,
    /webbandit/,
    /webcollage/,
    /webcopier/,
    /webenhancer/,
    /webfetch/,
    /webfuck/,
    /webgo is/,
    /webimagecollector/,
    /webleacher/,
    /webpix/,
    /webreaper/,
    /websauger/,
    /webstripper/,
    /websucker/,
    /webwhacker/,
    /webzip/,
    /web auto/,
    /web collage/,
    /web enhancer/,
    /web fetch/,
    /web fuck/,
    /web pix/,
    /web sauger/,
    /web sucker/,
    /webalta/,
    /webmasterworldforumbot/,
    /webshag/,
    /websiteextractor/,
    /websitequester/,
    /website quester/,
    /webster/,
    /whack/,
    /whacker/,
    /whatweb/,
    /who.is bot/,
    /widow/,
    /winhttrack/,
    /wiseguys robot/,
    /wonderbot/,
    /woobot/,
    /wotbox/,
    /wprecon/,
    /xaldon webspider/,
    /xaldon_webspider/,
    /xenu/,
    /youdaobot/,
    /zade/,
    /zauba/,
    /zermelo/,
    /zeus/,
    /zitebot/,
    /zmeu/,
    /zoombot/,
    /zoominfobot/,
    /zumbot/,
    /zyborg/,
    /adscanner/,
    /archive.org_bot/,
    /arquivo-web-crawler/,
    /arquivo.pt/,
    /autoemailspider/,
    /backlink-check/,
    /cah.io.community/,
    /check1.exe/,
    /clark-crawler/,
    /coccocbot/,
    /cognitiveseo/,
    /com.plumanalytics/,
    /crawl.sogou.com/,
    /crawler.feedback/,
    /crawler4j/,
    /dataforseo.com/,
    /demandbase-bot/,
    /domainsproject.org/,
    /ecatch/,
    /evc-batch/,
    /facebookscraper/,
    /gopher/,
    /heritrix/,
    /instabid/,
    /internetvista monitor/,
    /ips-agent/,
    /isitwp.com/,
    /iubenda-radar/,
    /linkdexbot/,
    /lwp-request/,
    /lwp-trivial/,
    /magpie-crawler/,
    /meanpathbot/,
    /mediawords/,
    /muhstik-scan/,
    /netestate ne crawler/,
    /obot/,
    /page scorer/,
    /pcbrowser/,
    /plumanalytics/,
    /polaris version/,
    /probe-image-size/,
    /ripz/,
    /s1z.ru/,
    /satoristudio.net/,
    /scalaj-http/,
    /scan.lol/,
    /seobility/,
    /seocompany.store/,
    /seoscanners/,
    /seostar/,
    /serpstatbot/,
    /sexsearcher/,
    /sitechecker.pro/,
    /siteripz/,
    /sogouspider/,
    /sp_auditbot/,
    /spyfu/,
    /sysscan/,
    /takeout/,
    /trendiction.com/,
    /trendiction.de/,
    /ubermetrics-technologies.com/,
    /voyagerx.com/,
    /webgains-bot/,
    /webmeup-crawler/,
    /webpros.com/,
    /webprosbot/,
    /x09mozilla/,
    /x22mozilla/,
    /xpymep1.exe/,
    /zauba.io/,
    /zgrab/
];
const isBadBot = (ua) => badBotsList.some((rx) => rx.test(ua));
const isBadBotTest = (ua) => badBotsList.forEach(rx => {
    if (rx.test(ua)) {
        const a = 123;
    }
    else {
        const b = 123;
    }
});
const robotsTxt = (req) => `User-agent: 01h4x.com
Disallow:/
User-agent: 360Spider
Disallow:/
User-agent: 404checker
Disallow:/
User-agent: 404enemy
Disallow:/
User-agent: 80legs
Disallow:/
User-agent: ADmantX
Disallow:/
User-agent: AIBOT
Disallow:/
User-agent: ALittle Client
Disallow:/
User-agent: ASPSeek
Disallow:/
User-agent: Abonti
Disallow:/
User-agent: Aboundex
Disallow:/
User-agent: Aboundexbot
Disallow:/
User-agent: Acunetix+
Disallow:/
User-agent: AfD-Verbotsverfahren
Disallow:/
User-agent: AhrefsBot
Disallow:/
User-agent: AiHitBot
Disallow:/
User-agent: Aipbot
Disallow:/
User-agent: Alexibot
Disallow:/
User-agent: AllSubmitter
Disallow:/
User-agent: Alligator
Disallow:/
User-agent: AlphaBot
Disallow:/
User-agent: Anarchie
Disallow:/
User-agent: Anarchy
Disallow:/
User-agent: Anarchy99
Disallow:/
User-agent: Ankit
Disallow:/
User-agent: Anthill
Disallow:/
User-agent: Apexoo
Disallow:/
User-agent: Aspiegel
Disallow:/
User-agent: Asterias
Disallow:/
User-agent: Atomseobot
Disallow:/
User-agent: Attach
Disallow:/
User-agent: AwarioRssBot
Disallow:/
User-agent: AwarioSmartBot
Disallow:/
User-agent: BBBike
Disallow:/
User-agent: BDCbot
Disallow:/
User-agent: BDFetch
Disallow:/
User-agent: BLEXBot
Disallow:/
User-agent: BackDoorBot
Disallow:/
User-agent: BackStreet
Disallow:/
User-agent: BackWeb
Disallow:/
User-agent: Backlink-Ceck
Disallow:/
User-agent: BacklinkCrawler
Disallow:/
User-agent: Badass
Disallow:/
User-agent: Bandit
Disallow:/
User-agent: Barkrowler
Disallow:/
User-agent: BatchFTP
Disallow:/
User-agent: Battleztar Bazinga
Disallow:/
User-agent: BetaBot
Disallow:/
User-agent: Bigfoot
Disallow:/
User-agent: Bitacle
Disallow:/
User-agent: BlackWidow
Disallow:/
User-agent: Black Hole
Disallow:/
User-agent: Blackboard
Disallow:/
User-agent: Blow
Disallow:/
User-agent: BlowFish
Disallow:/
User-agent: Boardreader
Disallow:/
User-agent: Bolt
Disallow:/
User-agent: BotALot
Disallow:/
User-agent: Brandprotect
Disallow:/
User-agent: Brandwatch
Disallow:/
User-agent: Buck
Disallow:/
User-agent: Buddy
Disallow:/
User-agent: BuiltBotTough
Disallow:/
User-agent: BuiltWith
Disallow:/
User-agent: Bullseye
Disallow:/
User-agent: BunnySlippers
Disallow:/
User-agent: BuzzSumo
Disallow:/
User-agent: CATExplorador
Disallow:/
User-agent: CODE87
Disallow:/
User-agent: CSHttp
Disallow:/
User-agent: Calculon
Disallow:/
User-agent: CazoodleBot
Disallow:/
User-agent: Cegbfeieh
Disallow:/
User-agent: CensysInspect
Disallow:/
User-agent: CheTeam
Disallow:/
User-agent: CheeseBot
Disallow:/
User-agent: CherryPicker
Disallow:/
User-agent: ChinaClaw
Disallow:/
User-agent: Chlooe
Disallow:/
User-agent: Citoid
Disallow:/
User-agent: Claritybot
Disallow:/
User-agent: Cliqzbot
Disallow:/
User-agent: Cloud mapping
Disallow:/
User-agent: Cocolyzebot
Disallow:/
User-agent: Cogentbot
Disallow:/
User-agent: Collector
Disallow:/
User-agent: Copier
Disallow:/
User-agent: CopyRightCheck
Disallow:/
User-agent: Copyscape
Disallow:/
User-agent: Cosmos
Disallow:/
User-agent: Craftbot
Disallow:/
User-agent: Crawling at Home Project
Disallow:/
User-agent: CrazyWebCrawler
Disallow:/
User-agent: Crescent
Disallow:/
User-agent: CrunchBot
Disallow:/
User-agent: Curious
Disallow:/
User-agent: Custo
Disallow:/
User-agent: CyotekWebCopy
Disallow:/
User-agent: DBLBot
Disallow:/
User-agent: DIIbot
Disallow:/
User-agent: DSearch
Disallow:/
User-agent: DTS Agent
Disallow:/
User-agent: DataCha0s
Disallow:/
User-agent: DatabaseDriverMysqli
Disallow:/
User-agent: Demon
Disallow:/
User-agent: Deusu
Disallow:/
User-agent: Devil
Disallow:/
User-agent: Digincore
Disallow:/
User-agent: DigitalPebble
Disallow:/
User-agent: Dirbuster
Disallow:/
User-agent: Disco
Disallow:/
User-agent: Discobot
Disallow:/
User-agent: Discoverybot
Disallow:/
User-agent: Dispatch
Disallow:/
User-agent: DittoSpyder
Disallow:/
User-agent: DnBCrawler-Analytics
Disallow:/
User-agent: DnyzBot
Disallow:/
User-agent: DomCopBot
Disallow:/
User-agent: DomainAppender
Disallow:/
User-agent: DomainCrawler
Disallow:/
User-agent: DomainSigmaCrawler
Disallow:/
User-agent: DomainStatsBot
Disallow:/
User-agent: Domains Project
Disallow:/
User-agent: Dotbot
Disallow:/
User-agent: Download Wonder
Disallow:/
User-agent: Dragonfly
Disallow:/
User-agent: Drip
Disallow:/
User-agent: ECCP/1.0
Disallow:/
User-agent: EMail Siphon
Disallow:/
User-agent: EMail Wolf
Disallow:/
User-agent: EasyDL
Disallow:/
User-agent: Ebingbong
Disallow:/
User-agent: Ecxi
Disallow:/
User-agent: EirGrabber
Disallow:/
User-agent: EroCrawler
Disallow:/
User-agent: Evil
Disallow:/
User-agent: Exabot
Disallow:/
User-agent: Express WebPictures
Disallow:/
User-agent: ExtLinksBot
Disallow:/
User-agent: Extractor
Disallow:/
User-agent: ExtractorPro
Disallow:/
User-agent: Extreme Picture Finder
Disallow:/
User-agent: EyeNetIE
Disallow:/
User-agent: Ezooms
Disallow:/
User-agent: FDM
Disallow:/
User-agent: FHscan
Disallow:/
User-agent: FemtosearchBot
Disallow:/
User-agent: Fimap
Disallow:/
User-agent: Firefox/7.0
Disallow:/
User-agent: FlashGet
Disallow:/
User-agent: Flunky
Disallow:/
User-agent: Foobot
Disallow:/
User-agent: Freeuploader
Disallow:/
User-agent: FrontPage
Disallow:/
User-agent: Fuzz
Disallow:/
User-agent: FyberSpider
Disallow:/
User-agent: Fyrebot
Disallow:/
User-agent: G-i-g-a-b-o-t
Disallow:/
User-agent: GT::WWW
Disallow:/
User-agent: GalaxyBot
Disallow:/
User-agent: Genieo
Disallow:/
User-agent: GermCrawler
Disallow:/
User-agent: GetRight
Disallow:/
User-agent: GetWeb
Disallow:/
User-agent: Getintent
Disallow:/
User-agent: Gigabot
Disallow:/
User-agent: Go!Zilla
Disallow:/
User-agent: Go-Ahead-Got-It
Disallow:/
User-agent: GoZilla
Disallow:/
User-agent: Gotit
Disallow:/
User-agent: GrabNet
Disallow:/
User-agent: Grabber
Disallow:/
User-agent: Grafula
Disallow:/
User-agent: GrapeFX
Disallow:/
User-agent: GrapeshotCrawler
Disallow:/
User-agent: GridBot
Disallow:/
User-agent: HEADMasterSEO
Disallow:/
User-agent: HMView
Disallow:/
User-agent: HTMLparser
Disallow:/
User-agent: HTTP::Lite
Disallow:/
User-agent: HTTrack
Disallow:/
User-agent: Haansoft
Disallow:/
User-agent: HaosouSpider
Disallow:/
User-agent: Harvest
Disallow:/
User-agent: Havij
Disallow:/
User-agent: Heritrix
Disallow:/
User-agent: Hloader
Disallow:/
User-agent: HonoluluBot
Disallow:/
User-agent: Humanlinks
Disallow:/
User-agent: HybridBot
Disallow:/
User-agent: IDBTE4M
Disallow:/
User-agent: IDBot
Disallow:/
User-agent: IRLbot
Disallow:/
User-agent: Iblog
Disallow:/
User-agent: Id-search
Disallow:/
User-agent: IlseBot
Disallow:/
User-agent: Image Fetch
Disallow:/
User-agent: Image Sucker
Disallow:/
User-agent: IndeedBot
Disallow:/
User-agent: Indy Library
Disallow:/
User-agent: InfoNaviRobot
Disallow:/
User-agent: InfoTekies
Disallow:/
User-agent: Intelliseek
Disallow:/
User-agent: InterGET
Disallow:/
User-agent: InternetSeer
Disallow:/
User-agent: Internet Ninja
Disallow:/
User-agent: Iria
Disallow:/
User-agent: Iskanie
Disallow:/
User-agent: IstellaBot
Disallow:/
User-agent: JOC Web Spider
Disallow:/
User-agent: JamesBOT
Disallow:/
User-agent: Jbrofuzz
Disallow:/
User-agent: JennyBot
Disallow:/
User-agent: JetCar
Disallow:/
User-agent: Jetty
Disallow:/
User-agent: JikeSpider
Disallow:/
User-agent: Joomla
Disallow:/
User-agent: Jorgee
Disallow:/
User-agent: JustView
Disallow:/
User-agent: Jyxobot
Disallow:/
User-agent: Kenjin Spider
Disallow:/
User-agent: Keybot Translation-Search-Machine
Disallow:/
User-agent: Keyword Density
Disallow:/
User-agent: Kinza
Disallow:/
User-agent: Kozmosbot
Disallow:/
User-agent: LNSpiderguy
Disallow:/
User-agent: LWP::Simple
Disallow:/
User-agent: Lanshanbot
Disallow:/
User-agent: Larbin
Disallow:/
User-agent: Leap
Disallow:/
User-agent: LeechFTP
Disallow:/
User-agent: LeechGet
Disallow:/
User-agent: LexiBot
Disallow:/
User-agent: Lftp
Disallow:/
User-agent: LibWeb
Disallow:/
User-agent: Libwhisker
Disallow:/
User-agent: LieBaoFast
Disallow:/
User-agent: Lightspeedsystems
Disallow:/
User-agent: Likse
Disallow:/
User-agent: LinkScan
Disallow:/
User-agent: LinkWalker
Disallow:/
User-agent: Linkbot
Disallow:/
User-agent: LinkextractorPro
Disallow:/
User-agent: LinkpadBot
Disallow:/
User-agent: LinksManager
Disallow:/
User-agent: LinqiaMetadataDownloaderBot
Disallow:/
User-agent: LinqiaRSSBot
Disallow:/
User-agent: LinqiaScrapeBot
Disallow:/
User-agent: Lipperhey
Disallow:/
User-agent: Lipperhey Spider
Disallow:/
User-agent: Litemage_walker
Disallow:/
User-agent: Lmspider
Disallow:/
User-agent: Ltx71
Disallow:/
User-agent: MFC_Tear_Sample
Disallow:/
User-agent: MIDown tool
Disallow:/
User-agent: MIIxpc
Disallow:/
User-agent: MJ12bot
Disallow:/
User-agent: MQQBrowser
Disallow:/
User-agent: MSFrontPage
Disallow:/
User-agent: MSIECrawler
Disallow:/
User-agent: MTRobot
Disallow:/
User-agent: Mag-Net
Disallow:/
User-agent: Magnet
Disallow:/
User-agent: Mail.RU_Bot
Disallow:/
User-agent: Majestic-SEO
Disallow:/
User-agent: Majestic12
Disallow:/
User-agent: Majestic SEO
Disallow:/
User-agent: MarkMonitor
Disallow:/
User-agent: MarkWatch
Disallow:/
User-agent: Mass Downloader
Disallow:/
User-agent: Masscan
Disallow:/
User-agent: Mata Hari
Disallow:/
User-agent: MauiBot
Disallow:/
User-agent: Mb2345Browser
Disallow:/
User-agent: MeanPath Bot
Disallow:/
User-agent: Meanpathbot
Disallow:/
User-agent: Mediatoolkitbot
Disallow:/
User-agent: MegaIndex.ru
Disallow:/
User-agent: Metauri
Disallow:/
User-agent: MicroMessenger
Disallow:/
User-agent: Microsoft Data Access
Disallow:/
User-agent: Microsoft URL Control
Disallow:/
User-agent: Minefield
Disallow:/
User-agent: Mister PiX
Disallow:/
User-agent: Moblie Safari
Disallow:/
User-agent: Mojeek
Disallow:/
User-agent: Mojolicious
Disallow:/
User-agent: MolokaiBot
Disallow:/
User-agent: Morfeus Fucking Scanner
Disallow:/
User-agent: Mozlila
Disallow:/
User-agent: Mr.4x3
Disallow:/
User-agent: Msrabot
Disallow:/
User-agent: Musobot
Disallow:/
User-agent: NICErsPRO
Disallow:/
User-agent: NPbot
Disallow:/
User-agent: Name Intelligence
Disallow:/
User-agent: Nameprotect
Disallow:/
User-agent: Navroad
Disallow:/
User-agent: NearSite
Disallow:/
User-agent: Needle
Disallow:/
User-agent: Nessus
Disallow:/
User-agent: NetAnts
Disallow:/
User-agent: NetLyzer
Disallow:/
User-agent: NetMechanic
Disallow:/
User-agent: NetSpider
Disallow:/
User-agent: NetZIP
Disallow:/
User-agent: Net Vampire
Disallow:/
User-agent: Netcraft
Disallow:/
User-agent: Nettrack
Disallow:/
User-agent: Netvibes
Disallow:/
User-agent: NextGenSearchBot
Disallow:/
User-agent: Nibbler
Disallow:/
User-agent: Niki-bot
Disallow:/
User-agent: Nikto
Disallow:/
User-agent: NimbleCrawler
Disallow:/
User-agent: Nimbostratus
Disallow:/
User-agent: Ninja
Disallow:/
User-agent: Nmap
Disallow:/
User-agent: Not
Disallow:/
User-agent: Nuclei
Disallow:/
User-agent: Nutch
Disallow:/
User-agent: Octopus
Disallow:/
User-agent: Offline Explorer
Disallow:/
User-agent: Offline Navigator
Disallow:/
User-agent: OpenLinkProfiler
Disallow:/
User-agent: OpenVAS
Disallow:/
User-agent: Openfind
Disallow:/
User-agent: Openvas
Disallow:/
User-agent: OrangeBot
Disallow:/
User-agent: OrangeSpider
Disallow:/
User-agent: OutclicksBot
Disallow:/
User-agent: OutfoxBot
Disallow:/
User-agent: PECL::HTTP
Disallow:/
User-agent: PHPCrawl
Disallow:/
User-agent: POE-Component-Client-HTTP
Disallow:/
User-agent: PageAnalyzer
Disallow:/
User-agent: PageGrabber
Disallow:/
User-agent: PageScorer
Disallow:/
User-agent: PageThing.com
Disallow:/
User-agent: Page Analyzer
Disallow:/
User-agent: Pandalytics
Disallow:/
User-agent: Panscient
Disallow:/
User-agent: Papa Foto
Disallow:/
User-agent: Pavuk
Disallow:/
User-agent: PeoplePal
Disallow:/
User-agent: Petalbot
Disallow:/
User-agent: Pi-Monster
Disallow:/
User-agent: Picscout
Disallow:/
User-agent: Picsearch
Disallow:/
User-agent: PictureFinder
Disallow:/
User-agent: Piepmatz
Disallow:/
User-agent: Pimonster
Disallow:/
User-agent: Pixray
Disallow:/
User-agent: PleaseCrawl
Disallow:/
User-agent: Pockey
Disallow:/
User-agent: ProPowerBot
Disallow:/
User-agent: ProWebWalker
Disallow:/
User-agent: Probethenet
Disallow:/
User-agent: Psbot
Disallow:/
User-agent: Pu_iN
Disallow:/
User-agent: Pump
Disallow:/
User-agent: PxBroker
Disallow:/
User-agent: PyCurl
Disallow:/
User-agent: QueryN Metasearch
Disallow:/
User-agent: Quick-Crawler
Disallow:/
User-agent: RSSingBot
Disallow:/
User-agent: RankActive
Disallow:/
User-agent: RankActiveLinkBot
Disallow:/
User-agent: RankFlex
Disallow:/
User-agent: RankingBot
Disallow:/
User-agent: RankingBot2
Disallow:/
User-agent: Rankivabot
Disallow:/
User-agent: RankurBot
Disallow:/
User-agent: Re-re
Disallow:/
User-agent: ReGet
Disallow:/
User-agent: RealDownload
Disallow:/
User-agent: Reaper
Disallow:/
User-agent: RebelMouse
Disallow:/
User-agent: Recorder
Disallow:/
User-agent: RedesScrapy
Disallow:/
User-agent: RepoMonkey
Disallow:/
User-agent: Ripper
Disallow:/
User-agent: RocketCrawler
Disallow:/
User-agent: Rogerbot
Disallow:/
User-agent: SBIder
Disallow:/
User-agent: SEOkicks
Disallow:/
User-agent: SEOkicks-Robot
Disallow:/
User-agent: SEOlyticsCrawler
Disallow:/
User-agent: SEOprofiler
Disallow:/
User-agent: SEOstats
Disallow:/
User-agent: SISTRIX
Disallow:/
User-agent: SMTBot
Disallow:/
User-agent: SalesIntelligent
Disallow:/
User-agent: ScanAlert
Disallow:/
User-agent: Scanbot
Disallow:/
User-agent: ScoutJet
Disallow:/
User-agent: Scrapy
Disallow:/
User-agent: Screaming
Disallow:/
User-agent: ScreenerBot
Disallow:/
User-agent: ScrepyBot
Disallow:/
User-agent: Searchestate
Disallow:/
User-agent: SearchmetricsBot
Disallow:/
User-agent: Seekport
Disallow:/
User-agent: SemanticJuice
Disallow:/
User-agent: Semrush
Disallow:/
User-agent: SemrushBot
Disallow:/
User-agent: SentiBot
Disallow:/
User-agent: SeoSiteCheckup
Disallow:/
User-agent: SeobilityBot
Disallow:/
User-agent: Seomoz
Disallow:/
User-agent: Shodan
Disallow:/
User-agent: Siphon
Disallow:/
User-agent: SiteCheckerBotCrawler
Disallow:/
User-agent: SiteExplorer
Disallow:/
User-agent: SiteLockSpider
Disallow:/
User-agent: SiteSnagger
Disallow:/
User-agent: SiteSucker
Disallow:/
User-agent: Site Sucker
Disallow:/
User-agent: Sitebeam
Disallow:/
User-agent: Siteimprove
Disallow:/
User-agent: Sitevigil
Disallow:/
User-agent: SlySearch
Disallow:/
User-agent: SmartDownload
Disallow:/
User-agent: Snake
Disallow:/
User-agent: Snapbot
Disallow:/
User-agent: Snoopy
Disallow:/
User-agent: SocialRankIOBot
Disallow:/
User-agent: Sociscraper
Disallow:/
User-agent: Sogou web spider
Disallow:/
User-agent: Sosospider
Disallow:/
User-agent: Sottopop
Disallow:/
User-agent: SpaceBison
Disallow:/
User-agent: Spammen
Disallow:/
User-agent: SpankBot
Disallow:/
User-agent: Spanner
Disallow:/
User-agent: Spbot
Disallow:/
User-agent: Spinn3r
Disallow:/
User-agent: SputnikBot
Disallow:/
User-agent: Sqlmap
Disallow:/
User-agent: Sqlworm
Disallow:/
User-agent: Sqworm
Disallow:/
User-agent: Steeler
Disallow:/
User-agent: Stripper
Disallow:/
User-agent: Sucker
Disallow:/
User-agent: Sucuri
Disallow:/
User-agent: SuperBot
Disallow:/
User-agent: SuperHTTP
Disallow:/
User-agent: Surfbot
Disallow:/
User-agent: SurveyBot
Disallow:/
User-agent: Suzuran
Disallow:/
User-agent: Swiftbot
Disallow:/
User-agent: Szukacz
Disallow:/
User-agent: T0PHackTeam
Disallow:/
User-agent: T8Abot
Disallow:/
User-agent: Teleport
Disallow:/
User-agent: TeleportPro
Disallow:/
User-agent: Telesoft
Disallow:/
User-agent: Telesphoreo
Disallow:/
User-agent: Telesphorep
Disallow:/
User-agent: TheNomad
Disallow:/
User-agent: The Intraformant
Disallow:/
User-agent: Thumbor
Disallow:/
User-agent: TightTwatBot
Disallow:/
User-agent: Titan
Disallow:/
User-agent: Toata
Disallow:/
User-agent: Toweyabot
Disallow:/
User-agent: Tracemyfile
Disallow:/
User-agent: Trendiction
Disallow:/
User-agent: Trendictionbot
Disallow:/
User-agent: True_Robot
Disallow:/
User-agent: Turingos
Disallow:/
User-agent: Turnitin
Disallow:/
User-agent: TurnitinBot
Disallow:/
User-agent: TwengaBot
Disallow:/
User-agent: Twice
Disallow:/
User-agent: Typhoeus
Disallow:/
User-agent: URLy.Warning
Disallow:/
User-agent: URLy Warning
Disallow:/
User-agent: UnisterBot
Disallow:/
User-agent: Upflow
Disallow:/
User-agent: V-BOT
Disallow:/
User-agent: VB Project
Disallow:/
User-agent: VCI
Disallow:/
User-agent: Vacuum
Disallow:/
User-agent: Vagabondo
Disallow:/
User-agent: VelenPublicWebCrawler
Disallow:/
User-agent: VeriCiteCrawler
Disallow:/
User-agent: VidibleScraper
Disallow:/
User-agent: Virusdie
Disallow:/
User-agent: VoidEYE
Disallow:/
User-agent: Voil
Disallow:/
User-agent: Voltron
Disallow:/
User-agent: WASALive-Bot
Disallow:/
User-agent: WBSearchBot
Disallow:/
User-agent: WEBDAV
Disallow:/
User-agent: WISENutbot
Disallow:/
User-agent: WPScan
Disallow:/
User-agent: WWW-Collector-E
Disallow:/
User-agent: WWW-Mechanize
Disallow:/
User-agent: WWW::Mechanize
Disallow:/
User-agent: WWWOFFLE
Disallow:/
User-agent: Wallpapers
Disallow:/
User-agent: Wallpapers/3.0
Disallow:/
User-agent: WallpapersHD
Disallow:/
User-agent: WeSEE
Disallow:/
User-agent: WebAuto
Disallow:/
User-agent: WebBandit
Disallow:/
User-agent: WebCollage
Disallow:/
User-agent: WebCopier
Disallow:/
User-agent: WebEnhancer
Disallow:/
User-agent: WebFetch
Disallow:/
User-agent: WebFuck
Disallow:/
User-agent: WebGo IS
Disallow:/
User-agent: WebImageCollector
Disallow:/
User-agent: WebLeacher
Disallow:/
User-agent: WebPix
Disallow:/
User-agent: WebReaper
Disallow:/
User-agent: WebSauger
Disallow:/
User-agent: WebStripper
Disallow:/
User-agent: WebSucker
Disallow:/
User-agent: WebWhacker
Disallow:/
User-agent: WebZIP
Disallow:/
User-agent: Web Auto
Disallow:/
User-agent: Web Collage
Disallow:/
User-agent: Web Enhancer
Disallow:/
User-agent: Web Fetch
Disallow:/
User-agent: Web Fuck
Disallow:/
User-agent: Web Pix
Disallow:/
User-agent: Web Sauger
Disallow:/
User-agent: Web Sucker
Disallow:/
User-agent: Webalta
Disallow:/
User-agent: WebmasterWorldForumBot
Disallow:/
User-agent: Webshag
Disallow:/
User-agent: WebsiteExtractor
Disallow:/
User-agent: WebsiteQuester
Disallow:/
User-agent: Website Quester
Disallow:/
User-agent: Webster
Disallow:/
User-agent: Whack
Disallow:/
User-agent: Whacker
Disallow:/
User-agent: Whatweb
Disallow:/
User-agent: Who.is Bot
Disallow:/
User-agent: Widow
Disallow:/
User-agent: WinHTTrack
Disallow:/
User-agent: WiseGuys Robot
Disallow:/
User-agent: Wonderbot
Disallow:/
User-agent: Woobot
Disallow:/
User-agent: Wotbox
Disallow:/
User-agent: Wprecon
Disallow:/
User-agent: Xaldon WebSpider
Disallow:/
User-agent: Xaldon_WebSpider
Disallow:/
User-agent: Xenu
Disallow:/
User-agent: YoudaoBot
Disallow:/
User-agent: Zade
Disallow:/
User-agent: Zauba
Disallow:/
User-agent: Zermelo
Disallow:/
User-agent: Zeus
Disallow:/
User-agent: Zitebot
Disallow:/
User-agent: ZmEu
Disallow:/
User-agent: ZoomBot
Disallow:/
User-agent: ZoominfoBot
Disallow:/
User-agent: ZumBot
Disallow:/
User-agent: ZyBorg
Disallow:/
User-agent: adscanner
Disallow:/
User-agent: archive.org_bot
Disallow:/
User-agent: arquivo-web-crawler
Disallow:/
User-agent: arquivo.pt
Disallow:/
User-agent: autoemailspider
Disallow:/
User-agent: backlink-check
Disallow:/
User-agent: cah.io.community
Disallow:/
User-agent: check1.exe
Disallow:/
User-agent: clark-crawler
Disallow:/
User-agent: coccocbot
Disallow:/
User-agent: cognitiveseo
Disallow:/
User-agent: com.plumanalytics
Disallow:/
User-agent: crawl.sogou.com
Disallow:/
User-agent: crawler.feedback
Disallow:/
User-agent: crawler4j
Disallow:/
User-agent: dataforseo.com
Disallow:/
User-agent: demandbase-bot
Disallow:/
User-agent: domainsproject.org
Disallow:/
User-agent: eCatch
Disallow:/
User-agent: evc-batch
Disallow:/
User-agent: facebookscraper
Disallow:/
User-agent: gopher
Disallow:/
User-agent: heritrix
Disallow:/
User-agent: instabid
Disallow:/
User-agent: internetVista monitor
Disallow:/
User-agent: ips-agent
Disallow:/
User-agent: isitwp.com
Disallow:/
User-agent: iubenda-radar
Disallow:/
User-agent: linkdexbot
Disallow:/
User-agent: lwp-request
Disallow:/
User-agent: lwp-trivial
Disallow:/
User-agent: magpie-crawler
Disallow:/
User-agent: meanpathbot
Disallow:/
User-agent: mediawords
Disallow:/
User-agent: muhstik-scan
Disallow:/
User-agent: netEstate NE Crawler
Disallow:/
User-agent: oBot
Disallow:/
User-agent: page scorer
Disallow:/
User-agent: pcBrowser
Disallow:/
User-agent: plumanalytics
Disallow:/
User-agent: polaris version
Disallow:/
User-agent: probe-image-size
Disallow:/
User-agent: ripz
Disallow:/
User-agent: s1z.ru
Disallow:/
User-agent: satoristudio.net
Disallow:/
User-agent: scalaj-http
Disallow:/
User-agent: scan.lol
Disallow:/
User-agent: seobility
Disallow:/
User-agent: seocompany.store
Disallow:/
User-agent: seoscanners
Disallow:/
User-agent: seostar
Disallow:/
User-agent: serpstatbot
Disallow:/
User-agent: sexsearcher
Disallow:/
User-agent: sitechecker.pro
Disallow:/
User-agent: siteripz
Disallow:/
User-agent: sogouspider
Disallow:/
User-agent: sp_auditbot
Disallow:/
User-agent: spyfu
Disallow:/
User-agent: sysscan
Disallow:/
User-agent: tAkeOut
Disallow:/
User-agent: trendiction.com
Disallow:/
User-agent: trendiction.de
Disallow:/
User-agent: ubermetrics-technologies.com
Disallow:/
User-agent: voyagerx.com
Disallow:/
User-agent: webgains-bot
Disallow:/
User-agent: webmeup-crawler
Disallow:/
User-agent: webpros.com
Disallow:/
User-agent: webprosbot
Disallow:/
User-agent: x09Mozilla
Disallow:/
User-agent: x22Mozilla
Disallow:/
User-agent: xpymep1.exe
Disallow:/
User-agent: zauba.io
Disallow:/
User-agent: zgrab
Disallow:/

User-agent: *
Crawl-delay: 1

User-agent: *
Disallow:

Sitemap: https://${req.hostname}/sitemap.xml
`;
const botsWithJavascript = (ua) => {
    return /Googlebot|AdsBot-Google|Google Page Speed|Chrome-Lighthouse/.test(ua);
};
const isCustomBot = (ua) => {
    return /^(facebookexternalhit)|(web\/snippet)|(Twitterbot)|(Slackbot)|(Embedly)|(LinkedInBot)|(Pinterest)|(XING-contenttabreceiver)/gi.test(ua);
};
export { robotsTxt, botsWithJavascript, isCustomBot, isBadBot, };

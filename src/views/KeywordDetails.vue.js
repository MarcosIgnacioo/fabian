import { useRoute } from 'vue-router';
import { API_KEY } from '../globals';
import { ref } from 'vue';
import MovieLazyOverview from '../components/MovieLazyOverview.vue';
import SearchHeaders from '../components/SearchHeaders.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const keyword = route.params.keyword_id;
let movies = ref([]);
let series = ref([]);
//xd
let isLoading = ref(true);
const orderByPopularity = ref("");
const filterByMoviesOrTV = ref("");
let keywordText = ref("");
getMoviesByKeyword(keyword);
getKeywordText(keyword);
async function getMoviesByKeyword(keyword) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${API_KEY}`);
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_keywords=${keyword}`, requestOptions);
    let json = await response.json();
    console.log(json);
    movies.value = json.results;
    response = await fetch(`https://api.themoviedb.org/3/discover/tv?with_keyword=${keyword}`, requestOptions);
    json = await response.json();
    series.value = json.results;
    isLoading.value = false;
}
async function getKeywordText(keyword) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${API_KEY}`);
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    const response = await fetch(`https://api.themoviedb.org/3/keyword/${keyword}`, requestOptions);
    const json = await response.json();
    keywordText.value = json.name;
}
function sourceFilter(e) {
    const select = e.target;
    filterByMoviesOrTV.value = select.value;
}
function popularityFilter(e) {
    const select = e.target;
    orderByPopularity.value = select.value;
    // ooga booga XD
    switch (orderByPopularity.value) {
        case "least":
            movies.value?.sort((movieA, movieB) => movieA.popularity - movieB.popularity);
            series.value?.sort((serieA, serieB) => serieA.popularity - serieB.popularity);
            break;
        default:
            movies.value?.sort((movieA, movieB) => movieB.popularity - movieA.popularity);
            series.value?.sort((serieA, serieB) => serieB.popularity - serieA.popularity);
            break;
    }
}
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col sm:p-4 text-coffe-950 space-y-2") }, });
    if (!__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col mx-auto space-y-2") }, });
        // @ts-ignore
        [SearchHeaders,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(SearchHeaders, new SearchHeaders({ keywordText: ((__VLS_ctx.keywordText)), sourceFilter: ((__VLS_ctx.sourceFilter)), popularityFilter: ((__VLS_ctx.popularityFilter)), }));
        const __VLS_1 = __VLS_0({ keywordText: ((__VLS_ctx.keywordText)), sourceFilter: ((__VLS_ctx.sourceFilter)), popularityFilter: ((__VLS_ctx.popularityFilter)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        if (!__VLS_ctx.isLoading && (__VLS_ctx.series?.length == 0 && __VLS_ctx.filterByMoviesOrTV === 'tv') || (__VLS_ctx.movies?.length == 0 && __VLS_ctx.filterByMoviesOrTV === 'movies') || (!__VLS_ctx.movies.length && !__VLS_ctx.series.length)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4  bg-kirby-900 rounded text-white font-bold text-2xl m-2 mx-auto sm:p-12 max-w-[720px] flex flex-col space-y-2 align-middle items-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("mr-4") }, src: ("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2Fg1SIlwFzDngAAAAj%2Fcrying-hello-kitty-sad-hello-kitty.gif&f=1&nofb=1&ipt=28498cfc28660c99730e1abe5159b2b7ce6a4feb8da7529689dbbbc3fb71f7d5&ipo=images"), alt: (""), });
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rounded sm:p-12 space-y-6") }, });
            if (__VLS_ctx.filterByMoviesOrTV == 'movies' || __VLS_ctx.filterByMoviesOrTV == '') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
                for (const [movie] of __VLS_getVForSourceType((__VLS_ctx.movies))) {
                    // @ts-ignore
                    [MovieLazyOverview,];
                    // @ts-ignore
                    const __VLS_5 = __VLS_asFunctionalComponent(MovieLazyOverview, new MovieLazyOverview({ media: ((movie)), }));
                    const __VLS_6 = __VLS_5({ media: ((movie)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
                }
            }
            if (__VLS_ctx.filterByMoviesOrTV == 'tv' || __VLS_ctx.filterByMoviesOrTV == '') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-4") }, });
                for (const [serie] of __VLS_getVForSourceType((__VLS_ctx.series))) {
                    // @ts-ignore
                    [MovieLazyOverview,];
                    // @ts-ignore
                    const __VLS_10 = __VLS_asFunctionalComponent(MovieLazyOverview, new MovieLazyOverview({ media: ((serie)), }));
                    const __VLS_11 = __VLS_10({ media: ((serie)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
                }
            }
        }
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['sm:p-4'];
    __VLS_styleScopedClasses['text-coffe-950'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['bg-kirby-900'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['m-2'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['sm:p-12'];
    __VLS_styleScopedClasses['max-w-[720px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['align-middle'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mr-4'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['sm:p-12'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['space-y-4'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MovieLazyOverview: MovieLazyOverview,
            SearchHeaders: SearchHeaders,
            movies: movies,
            series: series,
            isLoading: isLoading,
            filterByMoviesOrTV: filterByMoviesOrTV,
            keywordText: keywordText,
            sourceFilter: sourceFilter,
            popularityFilter: popularityFilter,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

import { useRoute } from 'vue-router';
import headers, { CATEGORIES } from '../globals';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const keyword = route.query.keyword_id || "";
const category = route.query.category_id || "";
const imgBasePath = "https://image.tmdb.org/t/p/w500";
let movies = ref();
let keywordText = ref("");
getMoviesByKeywordOrCategory(keyword, category);
// goofy ass vue
const categoryText = ref(CATEGORIES[category]);
getKeywordText(keyword);
async function getMoviesByKeywordOrCategory(keyword, category) {
    const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow"
    };
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_keywords=${keyword}&with_genres=${category}`, requestOptions);
    const json = await response.json();
    console.log(`https://api.themoviedb.org/3/discover/movie?with_keywords=${keyword}&with_genres=${category}`, requestOptions);
    movies.value = json.results;
}
async function getKeywordText(keyword) {
    const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow"
    };
    const response = await fetch(`https://api.themoviedb.org/3/keyword/${keyword}`, requestOptions);
    const json = await response.json();
    keywordText.value = json.name;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.keywordText);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.categoryText);
    for (const [movie] of __VLS_getVForSourceType((__VLS_ctx.movies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex  space-x-2 m-4 ") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("") }, to: (('/movies/id/' + movie.id)), }));
        const __VLS_2 = __VLS_1({ ...{ class: ("") }, to: (('/movies/id/' + movie.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("w-[94px] h-[141px]") }, loading: ("lazy"), src: ((__VLS_ctx.imgBasePath + movie.poster_path)), alt: ("${0}"), });
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col flex-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("block") }, });
        (movie.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (movie.release_date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[0.8rem]") }, });
        (movie.overview);
    }
    __VLS_styleScopedClasses[''];
    __VLS_styleScopedClasses['m-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['m-4'];
    __VLS_styleScopedClasses['w-[94px]'];
    __VLS_styleScopedClasses['h-[141px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-[0.8rem]'];
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
            imgBasePath: imgBasePath,
            movies: movies,
            keywordText: keywordText,
            categoryText: categoryText,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

import { ref } from 'vue';
import { API_KEY, formatDate, imgBasePath } from '../globals';
import { useRoute } from 'vue-router';
import Episode from '../components/Episode.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const seriesId = route.params.series_id;
const seasonNumber = route.params.season_number;
let seasonData = ref();
getSeasonDetails(seriesId, seasonNumber);
async function getSeasonDetails(seriesId, seasonNumber) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${API_KEY}`);
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}`, requestOptions);
    seasonData.value = await response.json();
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
    if (__VLS_ctx.seasonData?.name == undefined) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sm:flex bg-coal-900 sm:items-center sm:p-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("sm:rounded w-full sm:size-[100px] sm:h-auto") }, src: ((__VLS_ctx.imgBasePath + __VLS_ctx.seasonData?.poster_path)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl text-coffee-50 px-3 py-2 ") }, });
        (__VLS_ctx.seasonData?.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("opacity-75 text-coffee-50") }, });
        (__VLS_ctx.formatDate(__VLS_ctx.seasonData?.air_date));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-4 mx-auto max-w-[720px] group select-none space-y-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-2xl font-bold") }, });
        (__VLS_ctx.seasonData?.episodes.length);
        __VLS_elementAsFunction(__VLS_intrinsicElements.details, __VLS_intrinsicElements.details)({ ...{ class: ("border-b p-4 text-coal-950 bg-coffee-50 group select-none") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.summary, __VLS_intrinsicElements.summary)({ ...{ class: ("flex items-center font-bold ") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("ml-auto") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("fill-current opacity-75 w-4 h-4 -mr-1 rotate-90 group-open:-rotate-90") }, xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 20 20"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 leading-normal text-md ") }, });
        (__VLS_ctx.seasonData?.overview);
        for (const [episode] of __VLS_getVForSourceType((__VLS_ctx.seasonData?.episodes))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-3") }, });
            // @ts-ignore
            [Episode,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(Episode, new Episode({ episode: ((episode)), }));
            const __VLS_1 = __VLS_0({ episode: ((episode)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        }
    }
    __VLS_styleScopedClasses['sm:flex'];
    __VLS_styleScopedClasses['bg-coal-900'];
    __VLS_styleScopedClasses['sm:items-center'];
    __VLS_styleScopedClasses['sm:p-3'];
    __VLS_styleScopedClasses['sm:rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['sm:size-[100px]'];
    __VLS_styleScopedClasses['sm:h-auto'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['text-coffee-50'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['opacity-75'];
    __VLS_styleScopedClasses['text-coffee-50'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['max-w-[720px]'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['select-none'];
    __VLS_styleScopedClasses['space-y-3'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-coal-950'];
    __VLS_styleScopedClasses['bg-coffee-50'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['select-none'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['ml-auto'];
    __VLS_styleScopedClasses['fill-current'];
    __VLS_styleScopedClasses['opacity-75'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['-mr-1'];
    __VLS_styleScopedClasses['rotate-90'];
    __VLS_styleScopedClasses['group-open:-rotate-90'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['leading-normal'];
    __VLS_styleScopedClasses['text-md'];
    __VLS_styleScopedClasses['space-y-3'];
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
            formatDate: formatDate,
            imgBasePath: imgBasePath,
            Episode: Episode,
            seasonData: seasonData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

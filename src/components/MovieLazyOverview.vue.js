import { formatDate } from '../globals';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const imgBasePath = "https://image.tmdb.org/t/p/w500";
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-2 space-y-2 max-w-[1020px] bg-coal-500 sm:p-6 hover:scale-105 transition-all shadow-[5px_5px_0px_0px_#322016] text-coal-50") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("min-w-[150px]") }, to: (('/' +
            (('release_date' in __VLS_ctx.media)
                ? 'movie/' : 'serie/') + __VLS_ctx.media.id)), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("min-w-[150px]") }, to: (('/' +
            (('release_date' in __VLS_ctx.media)
                ? 'movie/' : 'serie/') + __VLS_ctx.media.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("w-[94px] h-[141px]") }, loading: ("lazy"), src: ((__VLS_ctx.imgBasePath + __VLS_ctx.media.poster_path)), alt: ("${0}"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("opacity-70 text-sm") }, });
    (__VLS_ctx.formatDate(('release_date' in __VLS_ctx.media)
        ? (__VLS_ctx.media).release_date : (__VLS_ctx.media).first_air_date));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col flex-1") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("min-w-[150px]") }, to: (('/' +
            (('release_date' in __VLS_ctx.media)
                ? 'movie/' : 'serie/') + __VLS_ctx.media.id)), }));
    const __VLS_8 = __VLS_7({ ...{ class: ("min-w-[150px]") }, to: (('/' +
            (('release_date' in __VLS_ctx.media)
                ? 'movie/' : 'serie/') + __VLS_ctx.media.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("block font-bold hover:underline cursor-pointer text-xl hover:!text-kirby-900") }, });
    (('title' in __VLS_ctx.media)
        ? (__VLS_ctx.media).title : (__VLS_ctx.media).name);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("block max-w-[100px] opacity-70") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[0.8rem] sm:text-lg") }, });
    (__VLS_ctx.media.overview);
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['max-w-[1020px]'];
    __VLS_styleScopedClasses['bg-coal-500'];
    __VLS_styleScopedClasses['sm:p-6'];
    __VLS_styleScopedClasses['hover:scale-105'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['shadow-[5px_5px_0px_0px_#322016]'];
    __VLS_styleScopedClasses['text-coal-50'];
    __VLS_styleScopedClasses['min-w-[150px]'];
    __VLS_styleScopedClasses['w-[94px]'];
    __VLS_styleScopedClasses['h-[141px]'];
    __VLS_styleScopedClasses['opacity-70'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-w-[150px]'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['hover:underline'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['hover:!text-kirby-900'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['max-w-[100px]'];
    __VLS_styleScopedClasses['opacity-70'];
    __VLS_styleScopedClasses['text-[0.8rem]'];
    __VLS_styleScopedClasses['sm:text-lg'];
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
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
;

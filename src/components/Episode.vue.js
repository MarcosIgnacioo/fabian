import { formatDate, imgBasePath } from '../globals';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("shadow-md sm:p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-coffee-950 w-fit mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("font-bold text-xl") }, });
    (__VLS_ctx.episode.episode_number + ".-" + __VLS_ctx.episode.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.episode.vote_average + " " + __VLS_ctx.episode.runtime + "m" + " " + __VLS_ctx.formatDate(__VLS_ctx.episode.air_date));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("sm:rounded") }, src: ((__VLS_ctx.imgBasePath + __VLS_ctx.episode.still_path)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.details, __VLS_intrinsicElements.details)({ ...{ class: ("border-b border-grey-lighter group select-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.summary, __VLS_intrinsicElements.summary)({ id: ((__VLS_ctx.episode.name)), ...{ class: ("flex items-center font-bold ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ((__VLS_ctx.episode.name)), ...{ class: ("ml-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("fill-current opacity-75 w-4 h-4 -mr-1 rotate-90 group-open:-rotate-90") }, xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 20 20"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("columns-3 group-open:mt-4") }, });
    for (const [star] of __VLS_getVForSourceType((__VLS_ctx.episode.guest_stars))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-h-fit break-inside-avoid-column") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("") }, to: (('/person/' + star.id)), }));
        const __VLS_2 = __VLS_1({ ...{ class: ("") }, to: (('/person/' + star.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        if (star.profile_path) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("after:content-['a'] rounded w-16 sm:w-24") }, src: ((__VLS_ctx.imgBasePath + star.profile_path)), alt: (""), });
        }
        if (star.profile_path) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[0.75rem] sm:text-xl") }, });
            (star.name);
        }
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-4 leading-normal text-md ") }, });
    (__VLS_ctx.episode.overview);
    __VLS_styleScopedClasses[''];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['sm:p-6'];
    __VLS_styleScopedClasses['text-coffee-950'];
    __VLS_styleScopedClasses['w-fit'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['sm:rounded'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-grey-lighter'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['select-none'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['fill-current'];
    __VLS_styleScopedClasses['opacity-75'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['-mr-1'];
    __VLS_styleScopedClasses['rotate-90'];
    __VLS_styleScopedClasses['group-open:-rotate-90'];
    __VLS_styleScopedClasses['columns-3'];
    __VLS_styleScopedClasses['group-open:mt-4'];
    __VLS_styleScopedClasses['max-h-fit'];
    __VLS_styleScopedClasses['break-inside-avoid-column'];
    __VLS_styleScopedClasses['after:content-[\'a\']'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-16'];
    __VLS_styleScopedClasses['sm:w-24'];
    __VLS_styleScopedClasses['text-[0.75rem]'];
    __VLS_styleScopedClasses['sm:text-xl'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['leading-normal'];
    __VLS_styleScopedClasses['text-md'];
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

import { ref, onMounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const imgBasePath = "https://image.tmdb.org/t/p/w500";
const favorites = ref([]);
onMounted(() => {
    loadFavorites();
});
function loadFavorites() {
    const storedFavorites = localStorage.getItem('favoritos');
    if (storedFavorites) {
        favorites.value = JSON.parse(storedFavorites);
    }
}
function removeFromFavorites(movieId) {
    favorites.value = favorites.value.filter(movie => movie.id !== movieId);
    localStorage.setItem('favoritos', JSON.stringify(favorites.value));
}
function getTitle(favorite) {
    return favorite.title || favorite.name || 'Título desconocido';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-6xl mx-auto p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl font-bold text-center mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap justify-center mt-4") }, });
    if (__VLS_ctx.favorites.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg") }, });
    }
    for (const [favorite] of __VLS_getVForSourceType((__VLS_ctx.favorites))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((favorite.id)), ...{ class: ("border rounded-lg m-4 p-4 w-72 shadow-lg") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + favorite.poster_path)), alt: ((__VLS_ctx.getTitle(favorite))), ...{ class: ("rounded-lg mb-2 w-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("font-semibold text-lg") }, });
        (__VLS_ctx.getTitle(favorite));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.removeFromFavorites(favorite.id);
                } }, ...{ class: ("bg-red-500 text-white px-2 py-1 mt-2 rounded-lg hover:bg-red-600") }, });
    }
    __VLS_styleScopedClasses['max-w-6xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['m-4'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['w-72'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['bg-red-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['hover:bg-red-600'];
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
            favorites: favorites,
            removeFromFavorites: removeFromFavorites,
            getTitle: getTitle,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

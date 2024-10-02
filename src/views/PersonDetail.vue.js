import { useRoute, useRouter } from 'vue-router';
import headers from '../globals';
import { ref, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const personId = route.params.id;
const imgBasePath = "https://image.tmdb.org/t/p/w500";
let person = ref(null);
getPersonDetails(personId);
async function getPersonDetails(personId) {
    const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow"
    };
    const response = await fetch(`https://api.themoviedb.org/3/person/${personId}?append_to_response=movie_credits,tv_credits`, requestOptions);
    const json = await response.json();
    person.value = json;
}
const knownForLimited = computed(() => {
    const movies = person.value?.movie_credits.cast.slice(0, 4) || [];
    const tvShows = person.value?.tv_credits.cast.slice(0, 4) || [];
    return [...movies, ...tvShows].slice(0, 8); //combina y limita a 8
});
function getReleaseYear(releaseDate) {
    return releaseDate ? releaseDate.substring(0, 4) : 'Desconocido';
}
const sortedFilmography = computed(() => {
    const movies = person.value?.movie_credits.cast.map(work => ({
        id: work.id,
        title: work.title,
        release_date: work.release_date,
        media_type: 'movie'
    })) || [];
    const tvShows = person.value?.tv_credits.cast.map(work => ({
        id: work.id,
        name: work.name,
        release_date: work.first_air_date,
        media_type: 'tv'
    })) || [];
    const combined = [...movies, ...tvShows];
    return combined.filter(work => work.release_date).sort((a, b) => {
        const aDate = new Date(a.release_date || '');
        const bDate = new Date(b.release_date || '');
        return aDate.getTime() - bDate.getTime();
    });
});
function redirectToWork(work) {
    let mediaType = work.media_type;
    if (!mediaType) {
        if (work.title) {
            mediaType = 'movie';
        }
        else if (work.name) {
            mediaType = 'tv';
        }
        else {
            console.error('No se pudo determinar el tipo de medio para el trabajo:', work);
            return;
        }
    }
    const path = mediaType === 'movie' ? `/movie/${work.id}` : `/serie/${work.id}`;
    router.push(path);
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
    if (__VLS_ctx.person) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-7xl mx-auto p-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-6 mb-8 border rounded-lg p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + __VLS_ctx.person.profile_path)), alt: ((__VLS_ctx.person.name)), ...{ class: ("w-48 h-64 object-cover shadow-lg rounded-lg") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-5xl font-bold") }, });
        (__VLS_ctx.person.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-2") }, });
        (__VLS_ctx.person.biography);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8 border rounded-lg p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.person.known_for_department);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.person.known_for?.length);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.person.gender === 1 ? 'Femenino' : 'Masculino');
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.person.birthday);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.person.place_of_birth);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.person.also_known_as.join(', '));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8 border rounded-lg p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4 py-4") }, });
        for (const [work] of __VLS_getVForSourceType((__VLS_ctx.knownForLimited))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.person)))
                            return;
                        __VLS_ctx.redirectToWork(work);
                    } }, key: ((work.id)), ...{ class: ("border p-2 rounded-lg text-center flex-shrink-0 w-48 cursor-pointer") }, });
            if (work.poster_path) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + work.poster_path)), alt: ((work.title || work.name)), ...{ class: ("w-full h-auto rounded-lg mb-1") }, });
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-bold") }, });
            (work.title || work.name);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border rounded-lg p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold mb-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [work] of __VLS_getVForSourceType((__VLS_ctx.sortedFilmography))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.person)))
                            return;
                        __VLS_ctx.redirectToWork(work);
                    } }, key: ((work.id)), ...{ class: ("cursor-pointer hover:underline") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.getReleaseYear(work.release_date));
            (work.title || work.name);
        }
    }
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-6'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['h-64'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:underline'];
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
            person: person,
            knownForLimited: knownForLimited,
            getReleaseYear: getReleaseYear,
            sortedFilmography: sortedFilmography,
            redirectToWork: redirectToWork,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

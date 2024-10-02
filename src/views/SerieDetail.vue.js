import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import headers from '../globals';
import { ref, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
function redirectToGenre(genreId) {
    router.push(`/series/category/${genreId}`);
}
function redirectToSerie(movieId) {
    router.push(`/serie/${movieId}`);
}
function redirectToSeason(seriesId, seasonNumber) {
    router.push(`/season-details/${seriesId}/${seasonNumber}`);
}
function redirectToPerson(personId) {
    router.push(`/person/${personId}`);
}
const route = useRoute();
const serieId = route.params.id;
const imgBasePath = "https://image.tmdb.org/t/p/w500";
let serie = ref(null);
const credits = ref(null);
const recommendations = ref(null);
const trailer = ref(null);
const keywords = ref([]);
let seasons = ref([]); // Nueva referencia para almacenar temporadas
watch(() => route.params.id, (newId) => {
    if (typeof newId === 'string') {
        getSerieDetails(newId);
        window.scrollTo(0, 0);
    }
});
getSerieDetails(serieId);
const isFavorite = ref(false);
function toggleFavorite() {
    if (!serie.value)
        return;
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const movieIndex = favoritos.findIndex((fav) => fav.id === serie.value.id);
    if (movieIndex === -1) {
        favoritos.push(serie.value);
        isFavorite.value = true;
    }
    else {
        favoritos.splice(movieIndex, 1);
        isFavorite.value = false;
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}
async function getSerieDetails(serieId) {
    const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow"
    };
    // Obtener el tráiler
    const videosResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/videos`, requestOptions);
    const videosJson = await videosResponse.json();
    trailer.value = videosJson.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube');
    // Obtener los detalles de la serie
    const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}`, requestOptions);
    const json = await response.json();
    serie.value = json;
    // Obtener el elenco
    const creditsResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/credits`, requestOptions);
    const creditsJson = await creditsResponse.json();
    credits.value = creditsJson;
    // Obtener recomendaciones
    const recommendationsResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/recommendations`, requestOptions);
    const recommendationsJson = await recommendationsResponse.json();
    recommendations.value = recommendationsJson;
    // Obtener palabras clave
    const keywordsResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/keywords`, requestOptions);
    const keywordsJson = await keywordsResponse.json();
    keywords.value = keywordsJson.keywords;
    // Obtener temporadas
    const seasonsResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/seasons`, requestOptions);
    const seasonsJson = await seasonsResponse.json();
    seasons.value = seasonsJson.seasons; // Asignar las temporadas a la referencia
}
function getCreators() {
    if (!serie.value)
        return 'Desconocido';
    return serie.value.created_by ? serie.value.created_by.map((creator) => creator.name).join(', ') : 'Desconocido';
}
function getActors() {
    if (!credits.value)
        return [];
    return credits.value.cast.slice(0, 9).map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile_path: actor.profile_path
    }));
}
function getReleaseYear(date) {
    return new Date(date).getFullYear();
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.serie) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-full bg-fixed bg-center bg-cover bg-no-repeat p-6 text-white") }, ...{ style: ((`background-image: url(${__VLS_ctx.imgBasePath + __VLS_ctx.serie.backdrop_path});`)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-black bg-opacity-90") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative flex space-x-6 max-w-7xl mx-auto") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + __VLS_ctx.serie.poster_path)), alt: ((__VLS_ctx.serie.name)), ...{ class: ("w-96 h-auto shadow-lg rounded-lg") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-5xl font-bold") }, });
        (__VLS_ctx.serie.name);
        (__VLS_ctx.getReleaseYear(__VLS_ctx.serie.first_air_date));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-2") }, });
        (__VLS_ctx.serie.first_air_date);
        (__VLS_ctx.serie.original_language);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.serie.number_of_seasons);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.serie.vote_average);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleFavorite) }, ...{ class: ((__VLS_ctx.isFavorite ? 'bg-red-500' : 'bg-blue-500')) }, ...{ class: ("text-white px-4 py-2 mt-4 rounded-lg") }, });
        (__VLS_ctx.isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos');
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-8") }, });
        (__VLS_ctx.serie.overview);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [genre] of __VLS_getVForSourceType((__VLS_ctx.serie.genres))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((genre.id)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.serie)))
                            return;
                        __VLS_ctx.redirectToGenre(genre.id);
                    } }, ...{ class: ("cursor-pointer hover:underline") }, });
            (genre.name);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.getCreators());
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [keyword] of __VLS_getVForSourceType((__VLS_ctx.keywords))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((keyword.id)), ...{ class: ("list-disc ml-4") }, });
            (keyword.name);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4 py-4") }, });
        for (const [actor] of __VLS_getVForSourceType((__VLS_ctx.getActors()))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.serie)))
                            return;
                        __VLS_ctx.redirectToPerson(actor.id);
                    } }, key: ((actor.name)), ...{ class: ("ml-4 mr-4 border p-2 rounded-lg text-center flex-shrink-0 w-48 cursor-pointer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + actor.profile_path)), alt: ((actor.name)), ...{ class: ("w-full h-auto rounded-lg mb-1") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-bold") }, });
            (actor.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
            (actor.character);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        if (__VLS_ctx.serie.seasons && __VLS_ctx.serie.seasons.length > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4 py-4") }, });
            for (const [season] of __VLS_getVForSourceType((__VLS_ctx.serie.seasons))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((season.id)), ...{ class: ("ml-4 mr-4 border p-2 rounded-lg text-center flex-shrink-0 w-48") }, });
                if (season.poster_path) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + season.poster_path)), alt: ((season.name)), ...{ class: ("w-full h-auto rounded-lg mb-1") }, });
                }
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-bold") }, });
                (season.name);
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
                (season.season_number);
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
                (season.air_date);
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.serie)))
                                return;
                            if (!((__VLS_ctx.serie.seasons && __VLS_ctx.serie.seasons.length > 0)))
                                return;
                            __VLS_ctx.redirectToSeason(__VLS_ctx.serie.id, season.season_number);
                        } }, ...{ class: ("mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg") }, });
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4 mt-4") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4 mt-4") }, });
        (__VLS_ctx.serie.original_name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4") }, });
        (__VLS_ctx.serie.status);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4") }, });
        (__VLS_ctx.serie.original_language);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        if (__VLS_ctx.trailer) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 mb-4 ml-4") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ src: ((`https://www.youtube.com/embed/${__VLS_ctx.trailer.key}`)), width: ("560"), height: ("315"), frameborder: ("0"), allow: ("accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"), allowfullscreen: (true), });
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4 mt-4") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8 ml-8 mr-8 border") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl ml-4 mt-4 font-semibold") }, });
        if (__VLS_ctx.recommendations && __VLS_ctx.recommendations.results && __VLS_ctx.recommendations.results.length > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex overflow-x-auto space-x-4 py-4") }, });
            for (const [recommendation] of __VLS_getVForSourceType((__VLS_ctx.recommendations.results))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.serie)))
                                return;
                            if (!((__VLS_ctx.recommendations && __VLS_ctx.recommendations.results && __VLS_ctx.recommendations.results.length > 0)))
                                return;
                            __VLS_ctx.redirectToSerie(recommendation.id);
                        } }, key: ((recommendation.id)), ...{ class: ("ml-4 mr-4 border p-2 rounded-lg text-center cursor-pointer flex-shrink-0 w-48") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgBasePath + recommendation.poster_path)), alt: ((recommendation.name)), ...{ class: ("w-full h-auto rounded-lg mb-1") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-bold") }, });
                (recommendation.name);
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, });
                ((recommendation.vote_average * 10).toFixed(0));
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ml-4 mt-4") }, });
        }
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-fixed'];
    __VLS_styleScopedClasses['bg-center'];
    __VLS_styleScopedClasses['bg-cover'];
    __VLS_styleScopedClasses['bg-no-repeat'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['bg-opacity-90'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-6'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['w-96'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:underline'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['list-disc'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mr-4'];
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
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mr-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['ml-8'];
    __VLS_styleScopedClasses['mr-8'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['overflow-x-auto'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mr-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-48'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['mt-4'];
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
            redirectToGenre: redirectToGenre,
            redirectToSerie: redirectToSerie,
            redirectToSeason: redirectToSeason,
            redirectToPerson: redirectToPerson,
            imgBasePath: imgBasePath,
            serie: serie,
            recommendations: recommendations,
            trailer: trailer,
            keywords: keywords,
            isFavorite: isFavorite,
            toggleFavorite: toggleFavorite,
            getCreators: getCreators,
            getActors: getActors,
            getReleaseYear: getReleaseYear,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

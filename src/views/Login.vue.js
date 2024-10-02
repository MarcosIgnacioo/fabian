import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Campos de inicio de sesión
const username = ref("");
const password = ref("");
const isAuthenticated = ref(localStorage.getItem("isAuthenticated") === "true");
// Función para iniciar sesión
function loginRequest() {
    if (username.value === "hazaelfg" && password.value === "palodecarnazadelpolito") {
        isAuthenticated.value = true;
        localStorage.setItem("isAuthenticated", "true");
        alert("¡Inicio de sesión exitoso!");
    }
    else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
}
// Función para cerrar sesión
function logout() {
    isAuthenticated.value = false;
    localStorage.removeItem("isAuthenticated");
    alert("Has cerrado sesión.");
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-md mx-auto p-6 bg-white rounded-lg shadow-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold mb-6 text-center") }, });
    if (!__VLS_ctx.isAuthenticated) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.loginRequest) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("username"), ...{ class: ("block text-sm font-medium text-gray-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.username)), name: ("username"), id: ("username"), ...{ class: ("mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200") }, placeholder: ("Enter your username"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), ...{ class: ("block text-sm font-medium text-gray-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), name: ("password"), id: ("password"), ...{ class: ("mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200") }, placeholder: ("Enter your password"), });
        (__VLS_ctx.password);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50") }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.logout) }, ...{ class: ("w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50") }, });
    }
    __VLS_styleScopedClasses['max-w-md'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['focus:ring'];
    __VLS_styleScopedClasses['focus:ring-blue-200'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['focus:ring'];
    __VLS_styleScopedClasses['focus:ring-blue-200'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['bg-blue-600'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-blue-500'];
    __VLS_styleScopedClasses['focus:ring-opacity-50'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['bg-red-600'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['hover:bg-red-700'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-red-500'];
    __VLS_styleScopedClasses['focus:ring-opacity-50'];
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
            username: username,
            password: password,
            isAuthenticated: isAuthenticated,
            loginRequest: loginRequest,
            logout: logout,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

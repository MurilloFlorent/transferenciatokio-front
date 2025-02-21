<script setup>
    import { ref } from "vue";
    import Form from "@/components/Form.vue";
    import List from "@/components/List.vue";
    import Alert from "./utils/Alert.vue";

    const toggleNovaTransferencia = ref(false);
    const toggleTodasTransferencias = ref(true);

    const mostrarAlerta = ref(false);
    const mensagem = ref('');
    const tipo = ref('');

    const mostrarAlertaComMensagem = (msg,type) => {
        mensagem.value = msg;
        tipo.value = type; 
        mostrarAlerta.value = true;

        setTimeout(() => {
            mostrarAlerta.value = false;
        }, 5000);
    };

    const fecharAlerta = () => {
        mostrarAlerta.value = false;
    };

    const Toggle = (event) => {
    if (event.target.dataset.tipo === "nova") {
        toggleNovaTransferencia.value = true;
        toggleTodasTransferencias.value = false;
    } else {
        toggleNovaTransferencia.value = false;
        toggleTodasTransferencias.value = true;
    }
    };
</script>
<template>
    <div class="w-1/2 rounded-2xl bg-white p-4 min-h-[40vh]  divide-y divide-gray-500 gap-2">
        <div class="flex flex-row gap-2m p-2">
            <h2 class="text-2xl text-emerald-600">Transferencias</h2>
            <button @click="Toggle" data-tipo="nova" class="rounded-md bg-emerald-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-emerald-700 focus:shadow-none active:bg-emerald-700  hover:bg-emerald-700  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Nova Transferência 
            </button>
            <button @click="Toggle" data-tipo="todos" class="rounded-md bg-emerald-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-emerald-700 focus:shadow-none active:bg-emerald-700  hover:bg-emerald-700  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Todas as Transferências
            </button>
        </div>
        <div class=" flex items-center  w-full">
            <Form @show-alert="mostrarAlertaComMensagem" :toggle="toggleNovaTransferencia"></Form>
            <List :toggle="toggleTodasTransferencias"></List>


        </div>
        <Alert v-if="mostrarAlerta" :mensagem="mensagem" :tipo="tipo" @close-alert="fecharAlerta"></Alert>  

    </div>
</template>

<script setup>
    import { ref, onMounted, watch, toRef } from "vue";
    import TransferenciasService from "@/services/TransferenciasService";

    const props = defineProps({
    toggle: Boolean
    });

    const transferencias = ref([]);

    const toggleRef = toRef(props, "toggle");

    const getTransferencias = async () => {
    try {
        const response = await TransferenciasService.getTransferencias();
        transferencias.value = response.data;
        console.log(transferencias.value);
    } catch (error) {
        console.error("Erro ao buscar transferências:", error);
    }
    };

    onMounted(() => {
    getTransferencias();
    });

    watch(toggleRef, (novoValor) => {
    if (novoValor) {
        getTransferencias();
    }
    });
</script>
<template>
    <div class="" v-if="toggle == true">
        <table  class="w-full rounded-3xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-emerald-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th  scope="col" class="px-6 py-3">Conta Origem</th>
                    <th  scope="col" class="px-6 py-3">Conta Destino</th>
                    <th  scope="col" class="px-6 py-3">Valor</th>
                    <th  scope="col" class="px-6 py-3">Data Transferência</th>
                    <th  scope="col" class="px-6 py-3">Data Solicitação</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="transferencia in transferencias" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td>{{ transferencia.contaOrigem }}</td>
                    <td>{{ transferencia.contaDestino }}</td>
                    <td>{{ transferencia.valorTransferencia }}</td>
                    <td>{{ transferencia.dataTransferencia }}</td>
                    <td>{{ transferencia.dataAgendamento }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>
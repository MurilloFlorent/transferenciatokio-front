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
    <div class="w-full " v-if="toggle == true">
        <ul role="list" class="divide-y divide-emerald-100 pt-6">
            <li class="flex justify-start items-start gap-x-6 p-5" v-for="transferencia in transferencias">
                <div class="flex flex-col min-w-0 gap-x-4" >
                    <span><strong>Conta Origem: </strong>{{ transferencia.contaOrigem  }}</span>
                    <span><strong>Conta Destino: </strong>{{ transferencia.contaDestino  }}</span>
                    <span><strong>Valor: </strong>{{ transferencia.valorTransferencia  }}</span>
                    <span><strong>Data Transferência: </strong>{{ transferencia.dataTransferencia  }}</span>
                    <span><strong>Data Solicitação: </strong>{{ transferencia.dataAgendamento  }}</span>
                </div>
            </li> 
        </ul>
    </div>
</template>
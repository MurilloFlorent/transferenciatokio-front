<script setup>
    import { ref, onMounted, watch, toRef } from "vue";
    import TransferenciasService from "@/services/TransferenciasService";

    const props = defineProps({
    toggle: Boolean
    });

    const transferencias = ref([]);

    const toggleRef = toRef(props, "toggle");

    const emit = defineEmits();
    const showAlert = (mensagem,type) => {
    emit('show-alert', mensagem, type);
    };

    const getTransferencias = async () => {
    try {
        const response = await TransferenciasService.getTransferencias();
        transferencias.value = response.data;
        
    } catch (error) {
        showAlert(error.response.data.errorMessage,"error");
    }
    };

    const formatarValor = (valor) => {
      const val = Number(valor.replace(",", "."));
      if (!val) return '0,00';
      const valorString = val.toFixed(2).replace(".", ",");
      return valorString
    }

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
    <div class="w-full max-h-[70vh] overflow-auto" v-if="toggle == true">
        <ul role="list" class="divide-y divide-emerald-100 pt-6">
            <li class="flex justify-start items-start gap-x-6 p-5" v-for="transferencia in transferencias">
                <div class="flex flex-col min-w-0 gap-x-4" >
                    <span><strong>Conta Origem: </strong>{{ transferencia.contaOrigem  }}</span>
                    <span><strong>Conta Destino: </strong>{{ transferencia.contaDestino  }}</span>
                    <span><strong>Valor: </strong>{{ formatarValor(transferencia.valorTransferencia)  }}</span>
                    <span><strong>Data Transferência: </strong>{{ transferencia.dataTransferencia  }}</span>
                    <span><strong>Data Solicitação: </strong>{{ transferencia.dataAgendamento  }}</span>
                </div>
            </li> 
        </ul>
    </div>
</template>
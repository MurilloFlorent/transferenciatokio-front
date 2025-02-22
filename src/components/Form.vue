<script setup>
    import { ref } from "vue";
    import TransferenciasService from "@/services/TransferenciasService";
    import { defineEmits } from 'vue';


    defineProps({
        toggle: Boolean
    });

    const contaOrigem = ref("");
    const contaDestino = ref("");
    const valorTransferencia = ref(0);
    const dataTransferencia = ref("");

    const formatarValor = () => {
        let valor = parseFloat(valorTransferencia.value);
        if (!isNaN(valor)) {
            valorTransferencia.value = valor.toFixed(2);
        } else {
            valorTransferencia.value = "";
        }
    };

    const emit = defineEmits();
    const showAlert = (mensagem,type) => {
    emit('show-alert', mensagem, type);
    };

    const gravar = async () => {
        try {   
             const response = await TransferenciasService.postTransferencia(contaOrigem.value,contaDestino.value,valorTransferencia.value,dataTransferencia.value)
        
                if(response.status == 200) {
                    showAlert("Transferência feita com Sucesso!","sucesso");
                    
                    contaOrigem.value = "";
                    contaDestino.value = "";
                    valorTransferencia.value = 0;
                    dataTransferencia.value = "";
                }         
        } catch(error) {
            if (error.response && error.response.data) {

                showAlert(error.response.data.errorMessage,"error");

            } else {
                showAlert('Erro desconhecido, tente novamente.',"error");
            
            }            
        }
            
            
    };
</script>
<template>
    <div class=" "  v-if="toggle == true">
        <form @submit.prevent="gravar" class="w-full flex gap-3 items-center h-[30vh]">
        <div class="form ">
            <label for="contaOrigem">Conta Origem</label>
            <input type="text" v-model="contaOrigem" id="contaOrigem" placeholder="Conta Origem" maxlength="10"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"  required>
        </div>
        <div class="form">
            <label for="contaDestino">Conta Destino</label>
            <input type="text" v-model="contaDestino" id="contaDestino" placeholder="Conta Destino" maxlength="10"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"  required>
        </div>
        <div class="form">
            <label for="valorTransferencia">Valor Transferência</label>
            <input type="text" v-model="valorTransferencia" id="valorTransferencia" placeholder="Valor Tranferência" @blur="formatarValor"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"  required>
        </div>
        <div class="form">
            <label for="dataTransferencia">Data Transferência</label>
            <input type="date" v-model="dataTransferencia" id="dataTransferencia" placeholder="Data Tranferência"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"  required>
        </div>

        <button type="submit" class="rounded-md bg-emerald-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-emerald-700 focus:shadow-none active:bg-emerald-700  hover:bg-emerald-700  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                Gravar 
        </button>
        </form>
       
        
    </div>
</template>


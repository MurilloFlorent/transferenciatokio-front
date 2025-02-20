<template>
    <div class="w-1/2 rounded-2xl bg-white p-4 h-[40vh]  divide-y divide-gray-500 gap-2">
        <div class="flex flex-row gap-2m p-2">
            <h2 class="text-2xl text-emerald-600">Transferencias</h2>
            <button @click="ToggleNova()" class="rounded-md bg-emerald-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-emerald-700 focus:shadow-none active:bg-emerald-700  hover:bg-emerald-700  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Nova Transferência 
            </button>
            <button @click="ToggleNova()" class="rounded-md bg-emerald-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-emerald-700 focus:shadow-none active:bg-emerald-700  hover:bg-emerald-700  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                Todas as Transferências
            </button>
        </div>
        <div>
            <Form :toggle="toggleNovaTransferencia"></Form>
        </div>    
    </div>
</template>
<script>
import Form from '@/components/Form.vue'
export default{
    components: { Form },
    data() {
        return {
            toggleNovaTransferencia: false
        }
    },
    methods: {
        ToggleNova (){
            this.toggleNovaTransferencia = !this.toggleNovaTransferencia
        }
    }
}
</script>
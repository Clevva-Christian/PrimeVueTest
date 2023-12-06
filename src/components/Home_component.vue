<template>
    <div>
        <h1 class="text-slate-900 text-3xl mb-12">Unstyled PrimeVue</h1>
        <Prime_Card class="bg-white w-1/5 p-4 shadow-sm rounded-md">
            <template #header>
                <div class="flex justify-center">
                    <img class="w-1/2" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FVector-Shape-PNG-Pic.png&f=1&nofb=1&ipt=9671a2317e695437ae6c3fadf13977db79dda3a39973ec94843785a9f0697522&ipo=images" alt="">
                </div>
            </template>
            <template #title><h1 class="text-3xl text-slate-900 mb-4">Advanced Card</h1></template>
            <template #subtitle> <h2 class="text-1xl text-slate-600 mb-2">Card subtitle</h2> </template>
            <template #content>
                <p class="m-0 text-sm text-slate-500 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Prime_Button class="py-2 px-4 bg-orange-400 text-white text-sm rounded-sm" icon="pi pi-check" label="Save" />
                <Prime_Button class="py-2 px-4 bg-orange-400 text-white text-sm rounded-sm" icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Prime_Card>
    </div>
</template>
<script>
    export default {
        name: 'Home_component',
        components: {
        }
    }
</script>
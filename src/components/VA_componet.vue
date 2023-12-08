<template>
    <div>
        <section>
            <div class="inner">
                
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "Home_page",
    data() {
        return {
            stateId: '',
            sessionCode: '',
            error: false,
            loading: false,
            data: {},
            actions: '',
        }
    },
    methods: {
        async start (vaName) {
            this.instence = axios.create({
                baseURL: "https://our.local.test/clevva/live/api",
                headers: {
                    "apikey": "d50b8fc932ff69a63e0907b3fb8b4a87"
                }
            });
            this.instance.post("/va/start", {
                "va": {
                    "code": vaName
                }
            }).then((response) => {
                if (!response.data.error) {
                    this.stateId = response?.data?.data?.stateid;
                    this.sessionCode = response?.data?.data?.session?.code;
                    this.load(this.stateId);
                    this.error = false;
                } else {
                    console.log(response?.data?.error?.message);
                    this.error = true;
                }
                ;
            });
        },
        async load() {
            this.instance.get(`/va/load/${6081656}`).then((response) => {
                if (!response.data.error) {
                    this.actions = response?.data?.data?.action;
                    this.data = response?.data?.data;
                    this.loading = false;
                    this.error = false;
                } else {
                    console.log(response?.data?.error?.message);
                    this.error = true;
                };
            });
        },
        async nextStep(action) {
            this.loading = true,
            this.activeButton = Number,
            this.instance.post('/va/action', {
                "action": action
            }).then((response) => {
                if (!response.data.error) {
                    this.stateId = response?.data?.data?.stateid;
                    this.load(this.stateId);
                    this.loading = false;
                    this.error = false;
                } else {
                    console.log(response?.data?.error?.message);
                    this.error = true;
                }
            });
        },
    }
}
</script>
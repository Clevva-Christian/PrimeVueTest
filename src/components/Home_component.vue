<script setup>
    import { ref } from "vue";
    import { useToast } from "primevue/usetoast";
    // Toast is used to display messafes in an overlay
    const toast = useToast();

    const visible = ref(false);
    const items = ref([
        {
            key: '0',
            label: 'Users',
            icon: 'pi pi-users',
            items: [
                {
                    key: '0_1',
                    label: 'New',
                    items: [
                        {
                            key: '0_1_0',
                            label: 'Member'
                        },
                        {
                            key: '0_1_1',
                            label: 'Group'
                        }
                    ]
                },
                {
                    key: '0_2',
                    label: 'Search'
                }
            ]
        },
        {
            key: '1',
            label: 'Tasks',
            icon: 'pi pi-server',
            items: [
                {
                    key: '1_0',
                    label: 'Add New'
                },
                {
                    key: '1_1',
                    label: 'Pending'
                },
                {
                    key: '1_2',
                    label: 'Overdue'
                }
            ]
        },
        {
            key: '2',
            label: 'Calendar',
            icon: 'pi pi-calendar',
            items: [
                {
                    key: '2_0',
                    label: 'New Event'
                },
                {
                    key: '2_1',
                    label: 'Today'
                },
                {
                    key: '2_2',
                    label: 'This Week'
                }
            ]
        }
    ]);
</script>

<template>
    <div class="inner">
        <!-- Menu -->
        <div class="mb-8">
            <Sidebar v-model:visible="visible" header="Menu">
                <PanelMenu :model="items" />
            </Sidebar>
            <Button class="p-button-lg width p-2" @click="visible = true" rounded aria-label="Menu">
                <i class="pi pi-bars text-2xl" severity="info"></i>
            </Button>
        </div>
        <!-- Main panel -->
        <div>
            <Splitter class="mb-5">
                <SplitterPanel class="flex align-items-center justify-content-center">
                    <PanelMenu :model="items" />
                </SplitterPanel>
                <SplitterPanel class="flex align-items-center justify-content-center">
                    <TabView>
                        <TabPanel header="Header I">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </TabPanel>
                        <TabPanel header="Header II">
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </TabPanel>
                    </TabView>
                </SplitterPanel>
                <SplitterPanel class="flex align-items-center justify-content-center">
                    <Card>
                        <template #header>
                            <img class="max-h-96 w-full object-cover" alt="user header" src="https://img.freepik.com/free-vector/modern-desktop-background-geometric-blue-design-vector_53876-135923.jpg?w=1800&t=st=1701953707~exp=1701954307~hmac=567a093218818041f27bf152264a2d7f0b7c0bdce213f46dab3f66e2e4a9955b" />
                        </template>
                        <template #title> Advanced Card </template>
                        <template #subtitle> Card subtitle </template>
                        <template #content>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                                quas!
                            </p>
                        </template>
                        <template #footer>
                            <Button icon="pi pi-check" label="Save" />
                            <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
                        </template>
                    </Card>
                </SplitterPanel>
            </Splitter>
        </div>
    </div>
</template>

<style scoped>
</style>
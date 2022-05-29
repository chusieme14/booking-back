<template>
    <v-toolbar flat class="mb-4">
        <div class="table-header-main-container" cols="12">
            <v-toolbar-title>
                {{ data.title }}
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-icon
                @click.stop="$emit('refresh')"
                v-if="!hide.includes('refresh')"
            >
                mdi-autorenew
                {{ data.isFetching ? "mdi-spin" : "" }}
            </v-icon>
            <slot name="custom_details"></slot>
            <div
                v-if="options"
                class="ml-10 px-10 border rounded-full shadow-md"
            >
                <div class=" table-header-main-container gap-5 items-center">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                plain
                                icon
                                color="red"
                                v-bind="attrs"
                                v-on="on"
                                @click.stop="$emit('batchDelete')"
                                :disabled="disable.includes('delete')"
                            >
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>delete selected</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                plain
                                icon
                                color="success"
                                v-bind="attrs"
                                v-on="on"
                                @click.stop="$emit('batchCopy')"
                                v-if="!hide.includes('batchCopy')"
                            >
                                <v-icon>mdi-content-copy</v-icon>
                            </v-btn>
                        </template>
                        <span>duplicate selected</span>
                    </v-tooltip>
                </div>
            </div>
        </div>
        <v-spacer></v-spacer>
        <div :class="'table-header-main-container items-end '+searchWidth" gap-3>
            <v-spacer></v-spacer>
            <div class="table-header-search" v-if="!hide.includes('search')">
                <v-text-field
                    v-model="data.keyword"
                    @keydown.enter="$emit('search')"
                    @click:append="$emit('search')"
                    append-icon="mdi-magnify"
                    label="search"
                    single-line
                    hide-details
                    class="mx-5 mt-5"
                ></v-text-field>
            </div>
            <div class="">
                <slot name="custom_actions"></slot>
            </div>
            <v-menu offset-y left nudge-bottom="5" :close-on-content-click="false">
                <template v-slot:activator="{ on: menu, attrs }">
                    <v-tooltip color="success" bottom>
                        <template v-slot:activator="{ on: tooltip }">
                            <v-btn
                                fab
                                tile
                                color="success"
                                v-bind="attrs"
                                v-on="{ ...tooltip, ...menu }"
                                @click.stop="drawer = true"
                                v-if="!hide.includes('filter')"
                            >
                                <v-icon>mdi-filter-plus-outline</v-icon>
                            </v-btn>
                        </template>
                        <span>Filter</span>
                    </v-tooltip>
                </template>
                        
                <v-card min-width="300">
                    <v-card-text>
                        <slot name="custom_filter" />
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="error"
                            text
                            @click="$emit('resetFilters')"
                        >
                           reset
                        </v-btn>
                        <v-btn
                            color="success"
                            depressed
                            @click="$emit('filterRecord')"
                        >
                            filter
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
            <v-tooltip color="success" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        fab
                        tile
                        color="success"
                        @click.stop="$emit('addNew')"
                        v-if="!hide.includes('addNew')"
                        :disabled="disable.includes('addNew')"
                        class="ml-3"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>Add new</span>
            </v-tooltip>
        </div>
    </v-toolbar>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    title: "Table Header",
                    isFetching: false,
                    keyword: ""
                };
            }
        },
        options: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        hide: {
            type: Array,
            default() {
                return [];
            }
        },
        disable: {
            type: Array,
            default() {
                return [];
            }
        },
        searchWidth: {
          type: String
        }
    },
};
</script>

<template>
    <div>
        <v-tooltip color="success" left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click.stop="$emit('editItem', item)"
                    :disabled="disable.includes('edit')"
                    v-if="!hide.includes('edit')"
                >
                    <v-icon small>
                        mdi-pencil
                    </v-icon>
                </v-btn>
            </template>
            Edit
        </v-tooltip>
        <v-tooltip color="error" left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="error"
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click.stop="$emit('deleteItem', item)"
                    :disabled="disable.includes('delete')"
                    v-if="!hide.includes('delete')"
                >
                    <v-icon small>
                        mdi-delete
                    </v-icon>
                </v-btn>
            </template>
            Delete
        </v-tooltip>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object
        },
        action: {
            type: Object,
            default: () => {
                return {
                    edit: true,
                    delete: true
                };
            }
        },
        disable: {
            type: Array,
            default() {
                return [];
            }
        },
        hide: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>
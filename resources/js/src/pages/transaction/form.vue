<template>
    <v-card>
        <v-card-title>view transaction</v-card-title>
        <v-card-text>
            <h3>Staff name: {{payload.staff.fullname}}</h3>
            <h3>Client name: {{payload.client.fullname}}</h3>
            <h3>Service: {{payload.service.name}}</h3>
            <div v-if="payload.rating" class="class-rating">
                <h3>Waiting Time: </h3>
                <v-icon :color="payload.rating.star_number>=1?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.rating.star_number>=2?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.rating.star_number>=3?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.rating.star_number>=4?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.rating.star_number>=5?'yellow darken-1':''">mdi-star</v-icon>
            </div>
            <div v-else class="class-rating">
                <h3>Waiting Time: </h3>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
            </div>
            <div v-if="payload.service_provided" class="class-rating">
                <h3>Service Provided: </h3>
                <v-icon :color="payload.service_provided.star_number>=1?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.service_provided.star_number>=2?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.service_provided.star_number>=3?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.service_provided.star_number>=4?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.service_provided.star_number>=5?'yellow darken-1':''">mdi-star</v-icon>
            </div>
            <div v-else class="class-rating">
                <h3>Service Provided: </h3>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
            </div>
            <div v-if="payload.office_staff" class="class-rating">
                <h3>Office Staff: </h3>
                <v-icon :color="payload.office_staff.star_number>=1?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.office_staff.star_number>=2?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.office_staff.star_number>=3?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.office_staff.star_number>=4?'yellow darken-1':''">mdi-star</v-icon>
                <v-icon :color="payload.office_staff.star_number>=5?'yellow darken-1':''">mdi-star</v-icon>
            </div>
            <div v-else class="class-rating">
                <h3>Office Staff: </h3>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
                <v-icon>mdi-star</v-icon>
            </div>
            <h3>Suggestions:</h3>
            <p class="ml-4">{{payload.rating?payload.rating.suggestion:''}}</p>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props:{
        payload:{

        },
        show:{}
    },
    data(){
        return{
            requirements:[],
            selectRequirements:[],
            data: {
                title: "Requirements",
                isFetching: false,
                keyword: "",
                filter:{}
            },
            footerPages: {
                "items-per-page-options": [5], 
            },
            options:{
                itemsPerPage: 5
            },
            total: 0,
            headers:[
                {
                    text: 'Id',
                    align: 'start',
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'Name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    .class-rating{
        display: flex;
    }
</style>
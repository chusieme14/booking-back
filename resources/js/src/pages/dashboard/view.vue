<template>
    <content-view-statistics :menus="menus"></content-view-statistics>
</template>

<script>
export default {
    computed:{
        menus(){
            return [
                {
                    // text: this._lang('client.view.profile'),
                    text:'Civil-status',
                    route: "civil-status",
                    icon: "mdi-account-group-outline",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Gender',
                    route: "gender",
                    icon: "mdi-gender-male-female-variant",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Location of Residents',
                    route: "residents",
                    icon: "mdi-map-marker-check",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Employment',
                    route: "employment",
                    icon: "mdi-briefcase",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Employment status',
                    route: "employment-status",
                    icon: "mdi-sass",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Place of work',
                    route: "place-work",
                    icon: "mdi-domain",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Educational Attainment',
                    route: "educational-attainment",
                    icon: "mdi-school",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Gross Monthly Income',
                    route: "gross-monthly-income",
                    icon: "mdi-cash",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Time to Get the Job',
                    route: "time-get-job",
                    icon: "mdi-map-clock",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Relevance of the Curriculum',
                    route: "relevance-curriculum",
                    icon: "mdi-book-search",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Promotion',
                    route: "promotion",
                    icon: "mdi-transfer-up",
                },
                // {
                //     // text: this._lang('client.view.subscriptions'),
                //     text:'Documents',
                //     route: "client-document",
                //     icon: "mdi-file-document",
                // },
                // {
                //     // text: this._lang('client.view.payments'),
                //     text:'Bookings',
                //     route: "client-booking",
                //     icon: "mdi-bookmark-check-outline",
                // },
                // {
                //     // text: this._lang('client.view.payments'),
                //     text:'Credit',
                //     route: "client-credit",
                //     icon: "mdi-credit-card-outline",
                // },
            ]
        }
    }
}
</script>
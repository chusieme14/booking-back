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
                    route: "dep-civil-status",
                    icon: "mdi-account-group-outline",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Gender',
                    route: "dep-gender",
                    icon: "mdi-gender-male-female-variant",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Location of Residents',
                    route: "dep-residents",
                    icon: "mdi-map-marker-check",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Employment',
                    route: "dep-employment",
                    icon: "mdi-briefcase",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Employment status',
                    route: "dep-employment-status",
                    icon: "mdi-sass",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Place of work',
                    route: "dep-place-work",
                    icon: "mdi-domain",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Educational Attainment',
                    route: "dep-educational-attainment",
                    icon: "mdi-school",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Gross Monthly Income',
                    route: "dep-gross-monthly-income",
                    icon: "mdi-cash",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Time to Get the Job',
                    route: "dep-time-get-job",
                    icon: "mdi-map-clock",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Relevance of the Curriculum',
                    route: "dep-relevance-curriculum",
                    icon: "mdi-book-search",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Promotion',
                    route: "dep-promotion",
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
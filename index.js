const baseUrl ="https://trophyrest.azurewebsites.net/api/Trophies"

Vue.createApp({
    data() {
        return {
            trophies: [],
            trophyToGetBy: "",
            idToGetBy: -1,
            deleteId: 0,
            deleteMessage:"",
            singleTrophy: null,
            addData: { competition: "", year: "" },   
            addMessage: "",
            updateData: { id: 0, competition: "", year: "" },
            updateMessage: ""                            
            }
        },

        methods: { 

            getAllTrophies() {
                this.getTrophies(baseUrl)
            },
            getByCompetition(vendor) { // filter cars by vendor
                const url = baseUrl + "?vendor=" + vendor
                this.getTrophies(url)
            },
            async getTrophies(url) { // helper method: getAllCars + getByVendor are very similar
                try {
                    const response = await axios.get(url)
                    this.trophies = await response.data
                } catch (ex) {
                    alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
                }
        }
    }
}).mount("#app")
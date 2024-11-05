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
            },
            async deleteTrophy(deleteId) {
                const url = baseUrl + "/" + deleteId
                try {
                    response = await axios.delete(url)
                    this.deleteMessage = response.status + " " + response.statusText
                    this.getAllTrophies()
                } catch (ex) {
                    alert(ex.message)
                }
            },
            async addTrophy() {
                try {
                    response = await axios.post(baseUrl, this.addData)
                    this.addMessage = "response " + response.status + " " + response.statusText
                    this.getAllTrophies()
                } catch (ex) {
                    alert(ex.message)
                }
            },
    }
}).mount("#app")
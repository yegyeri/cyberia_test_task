const urlApi = "https://api.test.cyberia.studio/api/v1";
export const Api = {
    /**
     * @param {Object} data 
     * @param {string} data.name
     * @param {string} data.email
     * @param {string} data.phone
     * @param {string} data.message
     */
    sendFeedbacks(data) {
        return fetch(urlApi + '/feedbacks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response.json())
        })
    },
    getProjects(){
        return fetch(urlApi + '/projects')
            .then(response => response.json())
            .then(data => data.items)
    },
    getProjectsCategories(){
        return fetch(urlApi + '/project-categories')
            .then(response => response.json())
            .then(data => data.items)
    }
}
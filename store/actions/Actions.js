import firebase from '../../config/ApiKeys';

function updateOrder(data) {
    return dispatch => {
        
        dispatch({
            type: 'ORDER',
            payload: data
        });
    }
}

function getData() {
    return dispatch => {

        const db = firebase.firestore();
        let deal = [];
        db.collection('menu').onSnapshot(data => {
            if (data.size) {
                data.forEach(item => {
                    
                    let obj = {
                        id: item.id,
                        name: item.data().name,
                        price: item.data().price,
                        img: item.data().image
                    }
                    deal.push(obj)
                });
                dispatch({
                    type: 'GETDATA',
                    payload: deal
                });
            }
        })
    }
}

export {
    getData,
    updateOrder
}
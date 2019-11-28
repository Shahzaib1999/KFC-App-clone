import firebase from '../../config/ApiKeys';

function updateOrder(data) {
    return dispatch => {
        let arr = [];

        let id = [data.id]
        let a = [data.name]
        let b = [data.price]

        arr.push(id)
        arr.push(a)
        arr.push(b)
        dispatch({
            type: 'ORDER',
            payload: arr
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

function clearData() {
    return dispatch => {
        dispatch({
            type: 'CLEAN'
        });
    }
}

export {
    getData,
    updateOrder,
    clearData
}
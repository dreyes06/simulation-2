const getHouses = (req, res) =>{
    const db = req.app.get('db')
    
    db.get_houses().then(result => {
        res.status(200).send(result)
    }).catch(error => {
        console.log(error)
    })
}

const postHome = (req, res) => {
    const {name, address, city, state, zip} = req.body
  
      
      const db = req.app.get('db')
      db.post_home(name, address, city, state, zip).then(result => {
          res.status(200).send(result)
  
      })
      
  }

const  updateHome = (req, res) => {
    const db = req.app.get('db');
    const{ p, b } = req;
    db.update_house([+p.house_id, b.name]).then(product => {
        res.status(200).json(product);
    }).catch(error => {
        console.log(error);
        res.status(500).json("nope")
    })
};


const deleteHome = (req, res) => {
    const db = req.app.get('db')
    const{id} = req.params;
    db.delete_home(id).then(product => {
        res.status(200).json(product);
    }).catch(error => {
        console.log(error)
        res.status(500).json('ask for help');
    })
};
 module.exports = {
    getHouses,
    postHome,
    updateHome,
    deleteHome
 }
import React, { useContext, useEffect, useState } from "react";
import styles from "../assets/CategoryModel.module.css";
import { AppContext } from "../context/AppContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { apiUrl } from "../components/Https";
<RiDeleteBin6Line />


const CategoryModel = () => {

  const { openModel, setopenModel, fetchCategories, allCategory, hideModel} = useContext(AppContext);

  const [categoryErr, setCategoryErr] = useState(null);
  const [category, setCategory] = useState({
    category:''
  });

  const handleChange = (event)=>{
    const {name, value} = event.target;
    setCategory((prev)=>({
      ...prev,
      [name]:value
    }));
  }

  const addCategory = async (event)=>{
    event.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch(`${apiUrl}/category`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(category)
    })
    .then(res=> res.json())
    .then((result)=>{
      if(result.status === 400){
        setCategoryErr(result.message);
      }else if(result.status === 200){
        setCategory({
          category:''
        });
        fetchCategories();
        setopenModel(false);
      }
    })
  }

  const deletCategory = async (id)=>{
    const res = await fetch(`${apiUrl}/deletecat`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        delete:id
      })
    })
    .then(resp => resp.json())
    .then((result) => {
      if(result.status === 400){
        setCategoryErr(result.message);
      }else if(result.status === 200){
        setCategory({
          category:''
        });
        fetchCategories();
      }
    })
  }


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={`d-flex align-items-start justify-content-between ${styles.header}`}>
          <div>
            <h2 className={styles.title}>Manage Categories</h2>
            <p className={styles.subtitle}>Organize your thoughts with colors</p>
          </div>
          <button onClick={hideModel}
            type="button"
            className={styles.closeBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#111827"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Create form */}
        <form onSubmit={addCategory} className={styles.createBox}>
          <div>
            <input
              type="text"
              name="category"
              className={styles.input}
              onChange={handleChange}
              value={category.category}
              placeholder="Category Name"
            />
            <span className="text-danger">{categoryErr}</span>
          </div>
        <button type="submit" className={`btn ${styles.createBtn}`}>
            Create
        </button>
        </form>

        {/* Category list */}
        <ul className={`list-unstyled ${styles.categoryList}`}>
          {allCategory.map(item =>{
            return <li key={item.id} className={`d-flex justify-content-between align-items-center ${styles.categoryItem}`}>
              <span>{item.category_name}</span><RiDeleteBin6Line onClick={()=>deletCategory(item.id)} style={{cursor:"pointer"}} className="fs-5 text-danger" />
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryModel;
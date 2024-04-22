import { createContext, useContext } from "react";
import { useState } from "react";
import supabase from "../SuperBase/Auth";
import { v4 as uuid } from "uuid";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [login, setlogin] = useState(() => {
    const isLoggedIn = localStorage.getItem("login");

    return isLoggedIn ? true : false;
  });


  const getblogs = async () => {
    const { data, error } = await supabase.from("Blogs").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  async function Login(email, password) {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw new Error(error.message);
      }
      setlogin(true);
      localStorage.setItem("login", true);
    } catch (error) {
      return error.message;
    }
  }

  async function logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
    } finally {
      setlogin(false);
      localStorage.removeItem("login");
    }
  }

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  };

  const updatepost = async (id, title, category, content) => {
    const { error } = await supabase
      .from("Blogs")
      .update({ title, category, content })
      .eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
  };

  async function deleteimage(imageName) {
    console.log(imageName);
    const { data, error } = await supabase.storage
      .from("featured_images")
      .remove(imageName);

    if (error) {
      throw new Error(error.message);
    }
    console.log("Post deleted");
  }

  const deletepost = async (id, imageName) => {
    const { error } = await supabase.from("Blogs").delete().eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
    deleteimage(imageName);
  };

  const convertimagetourl = async (imagename) => {
    const { data: imageUrl, error } = await supabase.storage
      .from("featured_images")
      .getPublicUrl(`${imagename}`);

    if (error) {
      throw new Error(error.message);
    }

    return imageUrl;
  };

  async function upload(image, title, content, category) {
    const id = uuid();
    console.log(image, title, content, category, id);
    const { error } = await supabase.from("Blogs").insert([
      {
        id,
        title,
        content,
        category,
        featured_image: image,
      },
    ]);
    if (error) {
      throw new Error(error.message);
    }
  }

  const uploadBlog = async (imagename, image, title, content, category) => {
    const { data, error } = await supabase.storage
      .from("featured_images")
      .upload(`${imagename}`, image, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      throw new Error(error.message);
    }

    const { publicUrl: featured_image } = await convertimagetourl(imagename);
    upload(featured_image, title, content, category);
  };

  const getblog = async (id) => {
    const { data, error } = await supabase
      .from("Blogs")
      .select("*")
      .eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  const getcateogries = async () => {
    try {
      const { data, error } = await supabase.from("Blogs").select("category");
      if (error) {
        throw new Error(error.message);
      }
      if (!data || data.length === 0) {
        return [];
      }
      let categories = data.map((blog) => blog.category);
      return [...new Set(categories)];
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      return [];
    }
  };

  return (
    <AuthContext.Provider
      value={{
        updatepost,
        getUser,
        getblogs,
        getblog,
        getcateogries,
        Login,
        login,
        logout,
        deletepost,
        uploadBlog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

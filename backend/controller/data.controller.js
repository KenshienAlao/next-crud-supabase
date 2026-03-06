const supabase = require("../config/db");

/**
 * 
 * @param {data} data - data from supabase (info, use it in the frontend)
 * @param {error} error - error from supabase  
 */

const getAllUser = async (req, res) => {
    try {
        const { data, error } = await supabase.from("users").select("*");
        if (error) return res.status(500).json({ error: error.message })
        return res.status(200).json({ data })
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const { data, error } = await supabase.from("users").select("*").eq("id", req.params.id).single(); //single() - because we only fetching single data
        if (error) return res.status(500).json({ error: error.message })
        return res.status(200).json({ data })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const createUser = async (req, res) => {
    try {
        const { data, error } = await supabase.from("users").insert(req.body);
        if (error) return res.status(500).json({ error: error.message })
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { data, error } = await supabase.from("users").update(req.body).eq("id", req.params.id);
        if (error) return res.status(500).json({ error: error.message })
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { data, error } = await supabase.from("users").delete(req.body).eq("id", req.params.id);
        if (error) return res.status(500).json({ error: error.message })
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}


module.exports = {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
}

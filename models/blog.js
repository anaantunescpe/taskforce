const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

  author: String,
  content: String,
  title: String

}, { timestamps: true, static: false });

const BlogModel = mongoose.model('Blog', blogSchema);

class Blog {
  /**
   * Get all Blogs from database
   * @returns {Array} Array of Blogs
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      BlogModel.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a Blog by it's id
   * @param {string} id - Blog Id
   * @returns {Object} - Blog Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      BlogModel.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new Blog
   * @param {Object} blog - Blog Document Data
   * @returns {string} - New Blog Id
   */
  static create(blog) {
    return new Promise((resolve, reject) => {
      BlogModel.create(blog).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a Blog
   * @param {string} id - Blog Id
   * @param {Object} blog - Blog Document Data
   * @returns {null}
   */
  static update(id, blog) {
    return new Promise((resolve, reject) => {
      BlogModel.findByIdAndUpdate(id, blog).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
  * Delete a Blog
  * @param {string} id - Blog Id
  * @returns {null}
  */

  static delete(id) {
    return new Promise((resolve, reject) => {
      BlogModel.findOneAndDelete({_id: id}).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
   });
 }
}

module.exports = Blog;

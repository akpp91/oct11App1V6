
import CreateDataContext from '../CreateDataContext';
import jsonserver from '../api/jsonserver';

        const blogReducer =(state , action)=>{

            switch (action.type) {

                case 'get_blogposts':
                    return action.payloade;
            case 'edit_blogpost':
                return state.map((blogPost)=>{
                        if (blogPost.id ===action.payloade.id ) {
                            return action.payloade;
                        }
                        else
                        {
                            return blogPost;
                        }
                }

                )

            case 'delete_BlogPost':
                return state.filter(blogPost => blogPost.id !== action.payloade)

          
            default:
                return state;
        }
        }

    const getBlogPosts = dispatch =>{
        
            return async ()=>{
                    const responce    = await jsonserver.get('/blogposts');
                    console.log(responce);                    
                    dispatch ({type: 'get_blogposts', payloade: responce.data});
            }
        }

    const addBlogPost= (dispatch)=>
    {
        return async (title,content , callback)=>
        {

            await jsonserver.post('/blogposts',{title,content})
            // dispatch({type : 'add_BlogPost', payloade :{title:title,content:content}});
            if (callback) {
                callback();    
            }
            
        };
        
    }


    const deleteBlogPost= (dispatch)=>
    {
        return async (id)=>{
            await jsonserver.delete(`/blogposts/${id}`);
            dispatch({type : 'delete_BlogPost', payloade: id});
        };
        
    }

    const editBlogPost = dispatch => {
        return async (id ,title, content , callback) => {
            await jsonserver.put(`/blogposts/${id}`, {title , content})
            dispatch({
            type : 'edit_blogpost', 
            payloade:{id :id , title:title, content:content}});
            callback();
        }
    }

export const {Context , Provider }= CreateDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost , editBlogPost , getBlogPosts}, 
    []
    )
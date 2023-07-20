import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  POST: [],
  status: "",
};

// // Define getProject thunk
// export const getProject = createAsyncThunk(
//   "getProject",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getProjectApi();
//       return response.data;
//     } catch (error) {
//       return rejectWithValue("Error getting projects: " + error.message);
//     }
//   }
// );

// // Define createProject thunk
// export const createProject = createAsyncThunk(
//   "createProject",
//   async (project, { rejectWithValue }) => {
//     try {
//       const response = await createProjectApi(project);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue("Error adding project: " + error.message);
//     }
//   }
// );

// // Define deleteProject thunk
// export const deleteProject = createAsyncThunk(
//   "deleteProject",
//   async ({ id, imageUrl }, { rejectWithValue }) => {
//     try {
//       const response = await deleteProjectApi(id, imageUrl);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue("Error deleting project: " + error.message);
//     }
//   }
// );

// // Define updateProject thunk
// export const updateProject = createAsyncThunk(
//   "updateProject",
//   async ({ id, project }, { rejectWithValue }) => {
//     try {
//       const response = await updateProjectApi(id, project);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue("Error updating project: " + error.message);
//     }
//   }
// );

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //   builder
    //     // Get project reducers
    //     .addCase(getProject.pending, (state) => {
    //       state.loading = true;
    //     })
    //     .addCase(getProject.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.PROJECTS = action.payload;
    //     })
    //     .addCase(getProject.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     })
    //     // Add project reducers
    //     .addCase(createProject.pending, (state) => {
    //       state.loading = true;
    //     })
    //     .addCase(createProject.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.PROJECTS.push(action.payload);
    //     })
    //     .addCase(createProject.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     })
    //     // Delete project reducers
    //     .addCase(deleteProject.pending, (state) => {
    //       state.loading = true;
    //     })
    //     .addCase(deleteProject.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.PROJECTS = state.PROJECTS.filter((project) => {
    //         return project._id !== action.payload.id;
    //       });
    //     })
    //     .addCase(deleteProject.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     })
    //     // Update project reducers
    //     .addCase(updateProject.pending, (state) => {
    //       state.loading = true;
    //     })
    //     .addCase(updateProject.fulfilled, (state, action) => {
    //       state.loading = false;
    //       const { id, ...updatedProject } = action.payload;
    //       const index = state.PROJECTS.findIndex((project) => project._id === id);
    //       state.PROJECTS[index] = {
    //         ...state.PROJECTS[index],
    //         ...updatedProject,
    //       };
    //     })
    //     .addCase(updateProject.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     });
  },
});

export default postSlice.reducer;

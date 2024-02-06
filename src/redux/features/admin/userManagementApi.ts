import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAllSemester: builder.query({
        
        //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        //       return {
        //       data: response.data,
        //       meta: response.meta,
        //     };
        //   },
        // }),
        addStudent: builder.mutation({
          query: (data) => ({
            url: "/users/create-student",
            method: "POST",
            body: data,
          }),
        }),
      }),
})

export const {useAddStudentMutation}=userManagementApi
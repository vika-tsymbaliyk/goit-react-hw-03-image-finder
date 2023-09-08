import { SearchBarHead, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled"

export const Searchbar = ({onSubmit})=>{
    return(
        <SearchBarHead>
            
            <SearchForm onSubmit={onSubmit}>
                <SearchFormButton type="submit">
                 <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
                
                <SearchFormInput
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
       </SearchBarHead>
    )
}
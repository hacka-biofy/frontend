import SearchIcon from "./icons/SearchIcon";
import { Button } from "./ui/button";

export default function NoResults() {
  return (
    <>
      <div>
        <SearchIcon className="w-10 h-10" />
      </div>
      <div>No results found</div>
      <div>Try searching for something else</div>
      <div>
        <Button className="mx-2" variant="outline">
          Search again
        </Button>
      </div>
    </>

  )
}
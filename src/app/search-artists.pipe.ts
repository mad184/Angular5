import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  // The pipeModifier is what pipeData will be compared against. It is what will be tiped on the input.
  transform(pipeData: any, pipeModifier: any): any {
    return pipeData.filter((eachItem: any) =>{
        return (
          eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) || 
          eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
        )
    });
  }

}

function makeAlbum (artistName:string,albumtitle:string,tracks?:number){
    let Album :{artist: String, albumTrack: String, track?:number}={
artist:artistName,
albumTrack:albumtitle,
    };
    if(tracks !== undefined){
        Album.track = tracks;

    }
    return Album;
}
//calling 3 function  and creating 3 variables with different values 
let album1 = makeAlbum("Ayesha","Album Title 1" );
console.log(album1);
let album2 = makeAlbum("ANNIE","Album Title 2" );
console.log(album2);
let album3 = makeAlbum("Ammarah","Album Title 3",10 );
console.log(album3);

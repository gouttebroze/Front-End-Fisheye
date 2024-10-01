class MediaFactory {
	static createMedia(data) {
		if (data.hasOwnProperty("image")) {
			return new MediaImage(data);
		} else if (data.hasOwnProperty("video")) {
			return new MediaVideo(data);
		} else {
			throw new Error("unknown format type");
		}
	}
}
export class ProductModel
{
    Name:string;

    icon:string;
    Description:string;
    screenshots: string[];
    features: string[];
    DownloadLink: string;
    version: string;
    AppType: string;
    New: string[];
    privacyPolicyURL: string;
    AppSize:string;

    constructor(name:string, icon:string, Description:string, screenshots: string[], features: string[], DownloadLink:string, version: string, AppType: string, New: string[], privacyPolicyURL: string,  AppSize:string)
    {
        this.Name = name;
        this.icon = icon;
        this.Description = Description;
        this.screenshots = screenshots;
        this.features = features;
        this.DownloadLink = DownloadLink;
        this.version = version;
        this.AppType = AppType;
        this.New = New;
        this.privacyPolicyURL = privacyPolicyURL;
        this.AppSize = AppSize;
    }

}
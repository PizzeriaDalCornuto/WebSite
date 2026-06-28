
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/contatti" | "/menu";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/contatti": Record<string, never>;
			"/menu": Record<string, never>
		};
		Pathname(): "/" | "/contatti/" | "/menu/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/asset/background/home.jpeg" | "/asset/cards/Gemini_Generated_Image_gp0ejngp0ejngp0e.png" | "/asset/cards/forest_raider.jpeg" | "/asset/cards/forno_a_fiamma.jpeg" | "/asset/cards/google_maps.jpeg" | "/asset/cards/google_play.jpeg" | "/asset/cards/impasto_semi_integrale.jpeg" | "/asset/cards/just_eat_bag.jpeg" | "/asset/icon/google-play.jpeg" | "/asset/icon/justeat.jpeg" | "/asset/icon/location.jpeg" | "/asset/menushowcase/background.jpeg" | "/asset/menushowcase/bevande.jpeg" | "/asset/menushowcase/calzoni.jpeg" | "/asset/menushowcase/chiacchere.jpeg" | "/asset/menushowcase/default.jpeg" | "/asset/menushowcase/dolci.jpeg" | "/asset/menushowcase/farinate.jpeg" | "/asset/menushowcase/focacce.jpeg" | "/asset/menushowcase/fritti.jpeg" | "/asset/menushowcase/marinara.jpeg" | "/asset/menushowcase/panuozzi.jpeg" | "/asset/menushowcase/pizze_classiche.jpeg" | "/asset/menushowcase/pizze_cornicione.jpeg" | "/asset/menushowcase/pizze_fritte.jpeg" | "/asset/menushowcase/pizze_gourmet.jpeg" | "/asset/menushowcase/pizze_vegane.jpeg" | "/asset/menushowcase/wurstel.jpeg" | "/favicon.png" | "/robots.txt" | string & {};
	}
}
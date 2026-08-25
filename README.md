# Ultimate Werewolf

A self-contained digital moderator and private role dealer for Ultimate Werewolf, including the Blood on the Clocktower role catalogue.

## Play

Open the deployed site root; it redirects to `ultimate-werewolf-setup.html`. The moderator creates a game and shares the generated link with players.

## Local development

```bash
python3 -m http.server 8765
# open http://localhost:8765/ultimate-werewolf-setup.html
```

The frontend uses the shared-game API at `https://api.gathr.lol/ultimate-werewolf`. Its separately versioned backend is required for multiplayer dealing and polling.

## Provenance

This project is based on `raihantrv/ultimate-werewolf-yeay` commit `2fe14e570304bfaf8f03f1bac05913c0a7d7b4f8`.

// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    clearCommand: "",
    //Opacity
    opacity: {
      focus: 1.0,
      blur: 0.99,
    },
    hyperTabs: {
      trafficButtons: true,
      tabIconsColored: true,
      activityColor: "cyan",
      closeAlign: "right",
      activityPulse: true,
      border: true,
    },
    systray: {
      hotkey: "Ctrl+Space",
    },
    init: [
      {
        rule: "once",
        commands: [
          "Set-PoshPrompt -Theme Space",
          "clear",
          "clear",
          "clear",
          "Write-Host -ForegroundColor Red '#######################################' -NoNewline; Write-Host -ForegroundColor DarkYellow '######################################' -NoNewline;Write-Host -ForegroundColor Red '########################################'",
          "$System_info = (Get-WmiObject -Class Win32_ComputerSystem)",
          "$Bios_info = (Get-WmiObject -Class Win32_Bios)",
          "$Processor_info = (Get-WmiObject -Class Win32_Processor)",
          "$Ram_info = (Get-WmiObject -Class Win32_PhysicalMemory)",
          "$Board_info = (Get-WmiObject -Class Win32_BaseBoard)",
          "$LogicalDisk_info = (Get-WmiObject -Class Win32_LogicalDisk)",
          "$Video_info = (Get-WmiObject -Class Win32_VideoController)",
          "$Monitor_info = (Get-WmiObject -Class Win32_DesktopMonitor)",
          "$OperativeSys_info = (Get-WmiObject -Class Win32_OperatingSystem)",
          "$BiosVersion = $Bios_info.Version",
          "$BiosManufacturer = $Bios_info.Manufacturer",
          "$SystemDomain = $System_info.Domain",
          "$ProcessorName = $Processor_info.Name",
          "$ProcessorSocket = $Processor_info.SocketDesignation",
          "$BoardName = $Board_info.Product",
          "$BoardManufacturer = $Board_info.Manufacturer",
          "$BoardSerial = $Board_info.SerialNumber",
          "$BoardData = $BoardName+' '+$ProcessorSocket",
          "$RamManufacturer = $Ram_info.Manufacturer | Sort-Object -Unique",
          "$RamFormat = $Ram_info.FormFactor | Sort-Object -Unique",
          "$RamAmountOf = $Ram_info.__GENUS | Sort-Object -Unique",
          "$RamSpeed = $Ram_info.Speed | Sort-Object -Unique",
          "$RamData = [string]$RamAmountOf+' '+$RamManufacturer+' '+$RamFormat+'Gb '",
          "$VideoName = $Video_info.Name",
          "$VideoRefreshrate = $Video_info.MaxRefreshRate",
          "$MonitorName = $Monitor_info.Name",
          "$OpSystem = $OperativeSys_info.SystemDirectory",
          "$OpSystemVersion = $OperativeSys_info.Version",
          "$DiskPartitions = $LogicalDisk_info.DeviceID",
          "$PC = (Get-CimInstance win32_computersystem).Name",
          "$User = (Get-CimInstance win32_computersystem).PrimaryOwnerName",
          "Write-Host -ForegroundColor DarkRed '#                                                         ' -NoNewline;Write-Host -ForegroundColor Red '                                                          #'",
          "Write-Host -ForegroundColor DarkRed '#                                                         ' -NoNewline;Write-Host -ForegroundColor Blue $PC -NoNewLine; Write-Host -ForegroundColor DarkYellow '@' -NoNewLine; Write-Host -ForegroundColor Blue $User -NoNewline;Write-Host -ForegroundColor Red '                                        #'",
          "Write-Host -ForegroundColor DarkRed '#  ██ ▄█▀▓██   ██▓ ▒█████   ███▄    █  ▄▄▄      ▒██   ██▒ ' -NoNewline;Write-Host -ForegroundColor Blue 'Domain: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $SystemDomain -NoNewline;Write-Host -ForegroundColor Red '                                     #'",
          "Write-Host -ForegroundColor DarkRed '#  ██▄█▒  ▒██  ██▒▒██▒  ██▒ ██ ▀█   █ ▒████▄    ▒▒ █ █ ▒░ ' -NoNewline;Write-Host -ForegroundColor Blue 'Processor: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $ProcessorName -NoNewline;Write-Host -ForegroundColor Red '       #'",
          "Write-Host -ForegroundColor DarkRed '# ▓███▄░   ▒██ ██░▒██░  ██▒▓██  ▀█ ██▒▒██  ▀█▄  ░░  █   ░ ' -NoNewline;Write-Host -ForegroundColor Blue 'Board: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $BoardData -NoNewline;Write-Host -ForegroundColor Red '               #'",
          "Write-Host -ForegroundColor DarkRed '# ▓██ █▄   ░ ▐██▓░▒██   ██░▓██▒  ▐▌██▒░██▄▄▄▄██  ░ █ █ ▒  ' -NoNewline;Write-Host -ForegroundColor Blue 'Board-Manufacturer: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $BoardManufacturer -NoNewline;Write-Host -ForegroundColor Red '                 #'",
          "Write-Host -ForegroundColor DarkRed '# ▒██▒ █▄  ░ ██▒▓░░ ████▓▒░▒██░   ▓██░ ▓█   ▓██▒▒██▒ ▒██▒ ' -NoNewline;Write-Host -ForegroundColor Blue 'Ram: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $RamData -NoNewline; Write-Host -ForegroundColor Blue 'Speed: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $RamSpeed -NoNewline; Write-Host -ForegroundColor DarkYellow 'mhz' -NoNewline;Write-Host -ForegroundColor Red '                         #'",
          "Write-Host -ForegroundColor DarkRed '# ▒ ▒▒ ▓▒   ██▒▒▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ▒▒   ▓▒█░▒▒ ░ ░▓ ░ ' -NoNewline;Write-Host -ForegroundColor Blue 'Video-Card: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $VideoName -NoNewline; Write-Host -ForegroundColor Blue ' FPS: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $VideoRefreshrate -NoNewline;Write-Host -ForegroundColor Red '         #'",
          "Write-Host -ForegroundColor DarkRed '# ░ ░▒ ▒░ ▓██ ░▒░   ░ ▒ ▒░ ░ ░░   ░ ▒░  ▒   ▒▒ ░░░   ░▒ ░ ' -NoNewline;Write-Host -ForegroundColor Blue 'Monitor: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $MonitorName -NoNewline;Write-Host -ForegroundColor Red '                             #'",
          "Write-Host -ForegroundColor DarkRed '# ░ ░░ ░  ▒ ▒ ░░  ░ ░ ░ ▒     ░   ░ ░   ░   ▒    ░    ░   ' -NoNewline;Write-Host -ForegroundColor Blue 'Operating-System: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $OpSystem -NoNewline; Write-Host -ForegroundColor Blue ' Version: ' -NoNewline; Write-Host -ForegroundColor DarkYellow $OpSystemVersion -NoNewline;Write-Host -ForegroundColor Red ' #'",
          "Write-Host -ForegroundColor DarkRed '# ░  ░    ░ ░         ░ ░           ░       ░  ░ ░    ░   ' -NoNewline;Write-Host -ForegroundColor Blue 'Disk-Partitions: ' -NoNewline;Write-Host -ForegroundColor DarkYellow $DiskPartitions -NoNewline;Write-Host -ForegroundColor Red '                  #'",
          "Write-Host -ForegroundColor DarkRed '#         ░ ░                                             ' -NoNewline;Write-Host -ForegroundColor Red '                                                          #'",
          "Write-Host -ForegroundColor DarkRed '#                                                         ' -NoNewline;Write-Host -BackgroundColor Black ' ' -NoNewline;Write-Host -BackgroundColor White ' ' -NoNewline;Write-Host -BackgroundColor DarkBlue ' ' -NoNewline;Write-Host -BackgroundColor Blue ' ' -NoNewline;Write-Host -BackgroundColor DarkGreen ' ' -NoNewline;Write-Host -BackgroundColor Green ' ' -NoNewline;Write-Host -BackgroundColor DarkCyan ' ' -NoNewline;Write-Host -BackgroundColor Cyan ' ' -NoNewline;Write-Host -BackgroundColor DarkRed ' ' -NoNewline;Write-Host -BackgroundColor Red ' ' -NoNewline;Write-Host -BackgroundColor DarkMagenta ' ' -NoNewline;Write-Host -BackgroundColor Magenta ' ' -NoNewline;Write-Host -BackgroundColor DarkYellow ' ' -NoNewline;Write-Host -BackgroundColor Yellow ' ' -NoNewline;Write-Host -BackgroundColor DarkGray ' ' -NoNewline;Write-Host -BackgroundColor Gray ' ' -NoNewline;Write-Host -ForegroundColor Red '                                          #'",
          "Write-Host -ForegroundColor DarkRed '#                                                         ' -NoNewline;Write-Host -ForegroundColor Red '                                                          #'",
          "Write-Host -ForegroundColor Red '#######################################' -NoNewline; Write-Host -ForegroundColor DarkYellow '######################################' -NoNewline;Write-Host -ForegroundColor Red '########################################'",
          "Write-Host -ForegroundColor DarkBlue '                                                                                    _____ '",
          "Write-Host -ForegroundColor DarkBlue '                                                                          _   _    |___  |'",
          "Write-Host -ForegroundColor DarkBlue '                              ___ ___ ___    _ _ ___ _ _    _ _ _ ___ ___| |_| |_ _ _|  _|'",
          "Write-Host -ForegroundColor DarkBlue '                             | . |  _| -_|  | | | . | | |  | | | | . |  _|  _|   | | |_|'",
          "Write-Host -ForegroundColor DarkRed '                             |__ |_| |___|  |_  |___|___|  |_____|___|_| |_| |_|_|_  |_|'",
          "Write-Host -ForegroundColor DarkRed '                                            |___|                                |___|'",
          "Write-Host -ForegroundColor Green '魔法使い                                                                                                      魔法使い'",
          "Write-Host -ForegroundColor Green 'Пророк                                                   Dio                                                   Пророк'",
          "Write-Host -ForegroundColor Green '교나                                                                                                             교나'",
          "Write-Host -ForegroundColor Green '                                                          '",
        ],
        allowedShells: ["powershell"],
      },
      {
        rule: ["windows", "tabs", "splitted"],
        commands: [
          "Set-PoshPrompt -Theme space",
          "clear",
          "Write-Host -ForegroundColor DarkBlue '교나'",
          "Write-Host ' '",
        ],
        allowedShells: ["powershell"],
      },
    ],
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: "stable",

    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: "MesloLGM NF",

    // default font weight: 'normal' or 'bold'
    fontWeight: "normal",

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: "bold",

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: "rgba(248,28,229,0.8)",

    // terminal text color under BLOCK cursor
    cursorAccentColor: "#000",

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: "BLOCK",

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: "#fff",

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: "#000",

    // terminal selection color
    selectionColor: "rgba(248,28,229,0.3)",

    // border color (window, tabs)
    borderColor: "#333",

    // custom CSS to embed in the main window
    css: "",

    // custom CSS to embed in the terminal window
    termCSS: "",

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: "true",

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: "",

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: "12px 14px",

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: "#000000",
      red: "#C51E14",
      green: "#1DC121",
      yellow: "#C7C329",
      blue: "#0A2FC4",
      magenta: "#C839C5",
      cyan: "#20C5C6",
      white: "#C7C7C7",
      lightBlack: "#686868",
      lightRed: "#FD6F6B",
      lightGreen: "#67F86F",
      lightYellow: "#FFFA72",
      lightBlue: "#6A76FB",
      lightMagenta: "#FD7CFC",
      lightCyan: "#68FDFE",
      lightWhite: "#FFFFFF",
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: `C:\\Windows\\System32\\bash.exe`,

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ["--login"],

    shells: [
      {
        name: "CMD",
        shell: "cmd.exe",
        args: ["--login"],
      },
      {
        name: "Bash",
        group: [
          {
            name: "WSL",
            shell: "C:\\Windows\\System32\\bash.exe",
            args: ["--login"],
          },
          {
            name: "Git",
            shell: "C:\\Program Files\\Git\\bin\\bash.exe",
            args: ["--login"],
          },
        ],
      },
      {
        name: "Powershell",
        shell: "powershell.exe",
        default: true,
      },
    ],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: "SOUND",

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: "vertical",

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyper-init",
    //"hyper-monokai-deluxe",
    //"hyper-chesterish",
    //"hyper-altair",
    //"hyper-atom-dark-transparent",
    //"hyper-gruv",
    "hyper-sweet",
    "hyperterm-tab-icons",
    "hyperlinks",
    "hyperline",
    "hyper-drop-file",
    "hyper-launch-menu",
    "hyper-highlight-active-pane",
    "hyper-dark-scrollbar",
    "hyper-search",
    "hyper-hide-title",
    "hyper-opacity",
    //Developer
    "hyperterm-open-devtools",
    "hyperterm-install-devtools",
    "is-hyper",
    //Game
    "hyperpower",
    //"hyper-cat",
    "hyperterm-paste",
    "hyperterm-lastpass",
    "hyperterm-dibdabs",
    //"hyper-confirm",
    "hyper-tabs-enhanced",
    "hyper-systray",
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};

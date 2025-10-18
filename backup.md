<html lang="pt-BR" data-lt-installed="true"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Atalhos Essenciais (Gerador)</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&amp;display=swap" rel="stylesheet">
    
    <style>
        /* -------------------------------------- */
        /* CSS: ESTILO GERAL E LAYOUT COMPACTO */
        /* -------------------------------------- */
        :root {
            --primary-color: #007bff;
            --background-color: #f0f2f5;
            --card-bg: #ffffff;
            --shadow-color: rgba(0, 0, 0, 0.2);
            --delete-color: #dc3545;
            --admin-color: #ffc107;
            --success-color: #28a745;
            --spacing-unit: 10px;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--background-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: var(--spacing-unit) 5px;
            color: #333;
        }

        header {
            width: 100%;
            max-width: 900px;
            text-align: center;
            margin-bottom: var(--spacing-unit);
        }

        h1 {
            color: #2c3e50;
            font-weight: 700;
            margin-bottom: 5px;
            font-size: 1.8em;
        }
        
        /* -------------------------------------- */
        /* LAYOUT DOS FORMULÁRIOS (Compacto) */
        /* -------------------------------------- */
        #top-controls {
            width: 100%;
            max-width: 900px;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-unit);
            margin-bottom: var(--spacing-unit);
            padding: 0 5px;
        }

        .link-form-container {
            padding: var(--spacing-unit);
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .link-form-container h3 {
            font-size: 1em;
            margin-top: 0;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
            margin-bottom: var(--spacing-unit);
        }

        /* ADMIN LOGIN */
        #admin-auth-box {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
            padding-bottom: 5px;
        }

        #admin-auth-box input[type="password"] {
            display: none;
            padding: 6px 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100px;
        }

        #admin-auth-box.active input, #admin-auth-box.active #admin-auth-btn {
            display: block;
        }
        
        #admin-login-btn, #admin-auth-btn {
            background-color: var(--admin-color);
            color: #333;
            border: none;
            padding: 6px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9em;
            transition: background-color 0.3s;
        }

        #admin-status {
            font-weight: 600;
            color: var(--admin-color);
            margin-left: 5px;
            font-size: 0.9em;
        }
        
        /* Formulários de Adição */
        .link-form {
            display: grid;
            grid-template-columns: 1fr 1fr auto auto;
            gap: 5px;
        }

        .link-form input, .link-form button, .link-form select {
            padding: 8px 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }
        
        #admin-form-container {
            border-left: 5px solid var(--admin-color);
            display: none;
        }
        
        #admin-form-container.active {
            display: block;
        }
        
        /* Gerador de Código */
        #generator-box {
            padding: var(--spacing-unit);
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #fff;
            margin-top: 15px;
        }

        #generator-btn {
            background-color: var(--success-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            width: 100%;
            margin-bottom: 10px;
        }

        #output-code {
            width: 100%;
            height: 250px;
            margin-top: 5px;
            padding: 10px;
            box-sizing: border-box;
            border: 1px dashed #ccc;
            background-color: #f8f8f8;
            font-family: 'Consolas', 'Courier New', monospace;
            font-size: 12px;
            resize: vertical;
        }

        @media (max-width: 500px) {
            .link-form {
                grid-template-columns: 1fr;
                gap: 5px;
            }
            .link-form button {
                grid-column: span 1;
            }
        }

        /* -------------------------------------- */
        /* ESTILO DOS LINKS (SOMENTE TEXTO) */
        /* -------------------------------------- */
        #tab-container {
            width: 100%;
            max-width: 900px;
            margin-top: 10px;
        }

        #tabs {
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #ccc;
            margin-bottom: 15px;
            flex-wrap: wrap;
        }

        .tab-button {
            padding: 8px 12px;
            cursor: pointer;
            font-size: 1em;
            margin: 0 2px;
        }

        .tab-button.active {
            border-bottom-width: 2px;
        }
        
        #links-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 10px;
            max-width: 900px;
            width: 100%;
            padding: 0 5px;
        }
        
        .link-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-decoration: none;
            color: #333;
            padding: 8px 12px;
            border-radius: 6px;
            background-color: var(--card-bg);
            text-align: left;
            position: relative;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            transition: background-color 0.2s, transform 0.2s;
            cursor: pointer;
            overflow: hidden;
        }
        
        .link-item:hover {
            background-color: #f5f5f5;
        }

        .link-item .link-label {
            font-size: 0.9em;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex-grow: 1;
            padding-right: 5px;
        }
        
        /* ESTILOS DE DRAG AND DROP */
        .link-item.dragging {
            opacity: 0.3;
            transform: scale(0.98);
        }
        
        .link-item.drop-target-above {
            border-top: 2px solid var(--primary-color);
            padding-top: 6px;
        }
        
        .link-item.drop-target-below {
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 6px;
        }

        .delete-btn {
            position: static;
            flex-shrink: 0;
            margin-left: 5px;
            width: 18px;
            height: 18px;
            font-size: 12px;
            line-height: 16px;
            background-color: var(--delete-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .link-item:hover .delete-btn { opacity: 1; }
        .link-item[data-type="admin"] .delete-btn { display: none; }
        
        body.admin-mode .link-item {
            cursor: grab;
        }
        body.admin-mode .link-item[data-type="admin"] .delete-btn { 
            opacity: 1; 
            display: block; 
        }

        @media (max-width: 480px) {
            #links-container {
                grid-template-columns: 1fr;
            }
            .link-item {
                padding: 10px 12px;
            }
        }
    </style>
<style>._button_10caf_25{border-radius:8px;border:unset;cursor:pointer;transition:.3s}._button_10caf_25:disabled{opacity:.3;cursor:not-allowed}._button_default_10caf_35{background:transparent;color:#43434e}._button_default_10caf_35:hover{background:#f3f4f7}._button_default_10caf_35:active{background:#8e8e8e}._button_default_10caf_35 ._svg_10caf_45 *{fill:#43434e}._button_primary_10caf_48{background:#007eff;color:#fff}._button_primary_10caf_48:hover{background:#3398ff}._button_primary_10caf_48:active{background:#66b2ff}._button_primary_10caf_48 ._svg_10caf_45 *{fill:#fff}._button_link_10caf_61{background:transparent;color:#007eff}._button_link_10caf_61:hover{color:#3398ff}._button_link_10caf_61:active{color:#66b2ff}._button_link_10caf_61 ._svg_10caf_45 *{fill:#007eff}._button_link_10caf_61 ._svg_10caf_45 *:hover{fill:#3398ff}._button_link_10caf_61 ._svg_10caf_45 *:active{fill:#66b2ff}._button_large_10caf_80{padding:12px 16px}._button_large_10caf_80 *{font-size:16px}._button_medium_10caf_86{padding:8px 16px}._button_medium_10caf_86 *{font-size:16px}._button_small_10caf_92{padding:4px;min-height:24px}._button_small_10caf_92 *{font-size:12px}._flexBox_9xdww_14{flex-flow:unset}._gap_extraTiny_9xdww_18{gap:2px}._gap_tiny_9xdww_22{gap:4px}._gap_extraSmall_9xdww_26{gap:6px}._gap_small_9xdww_30{gap:8px}._gap_medium_9xdww_34{gap:16px}._gap_normal_9xdww_38{gap:24px}._gap_large_9xdww_42{gap:32px}._gap_xLarge_9xdww_46{gap:48px}._gap_xxLarge_9xdww_50{gap:56px}._gap_extraLarge_9xdww_54{gap:64px}._column_9xdww_58{flex-direction:column!important}._flexWrap_9xdww_62{flex-wrap:wrap}._popover_12uvb_1{position:fixed;padding:8px 10px;z-index:2147483647;background:#31363de6;border-radius:4px;color:#fff;font-size:14px}._buttons_12uvb_11{position:fixed;top:0;right:0;padding:8px;z-index:2147483647}._popup_hcu7e_1{position:fixed;z-index:2147483649;background:#ffffffe6;border-radius:4px;color:#000;font-size:14px;line-height:1.286;width:350px;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);box-shadow:0 0 7px -5px #000}._popup_hcu7e_1:before{border-color:rgba(255,255,255,.9) transparent;border-width:0 7px 7px 7px;left:7px;top:-7px;border-style:solid;content:".";display:block;height:0;position:absolute;text-indent:-30000px;width:0}._color_hcu7e_27{width:20px;height:20px;cursor:pointer;flex-shrink:0}._styleContainer_hcu7e_34{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._extraTiny_dg7lc_14{padding:2px}._extraTinyVR_dg7lc_18{padding-top:2px;padding-bottom:2px}._extraTinyHR_dg7lc_23{padding-left:2px;padding-right:2px}._extraTinyTop_dg7lc_28{padding-top:2px}._extraTinyRight_dg7lc_32{padding-right:2px}._extraTinyBottom_dg7lc_36{padding-bottom:2px}._extraTinyLeft_dg7lc_40{padding-left:2px}._tiny_dg7lc_44{padding:4px}._tinyVR_dg7lc_48{padding-top:4px;padding-bottom:4px}._tinyHR_dg7lc_53{padding-left:4px;padding-right:4px}._tinyTop_dg7lc_58{padding-top:4px}._tinyRight_dg7lc_62{padding-right:4px}._tinyBottom_dg7lc_66{padding-bottom:4px}._tinyLeft_dg7lc_70{padding-left:4px}._extraSmall_dg7lc_74{padding:6px}._extraSmallVR_dg7lc_78{padding-top:6px;padding-bottom:6px}._extraSmallHR_dg7lc_83{padding-left:6px;padding-right:6px}._extraSmallTop_dg7lc_88{padding-top:6px}._extraSmallRight_dg7lc_92{padding-right:6px}._extraSmallBottom_dg7lc_96{padding-bottom:6px}._extraSmallLeft_dg7lc_100{padding-left:6px}._small_dg7lc_104{padding:8px}._smallVR_dg7lc_108{padding-top:8px;padding-bottom:8px}._smallHR_dg7lc_113{padding-left:8px;padding-right:8px}._smallTop_dg7lc_118{padding-top:8px}._smallRight_dg7lc_122{padding-right:8px}._smallBottom_dg7lc_126{padding-bottom:8px}._smallLeft_dg7lc_130{padding-left:8px}._medium_dg7lc_134{padding:16px}._mediumVR_dg7lc_138{padding-top:16px;padding-bottom:16px}._mediumHR_dg7lc_143{padding-left:16px;padding-right:16px}._mediumTop_dg7lc_148{padding-top:16px}._mediumRight_dg7lc_152{padding-right:16px}._mediumBottom_dg7lc_156{padding-bottom:16px}._mediumLeft_dg7lc_160{padding-left:16px}._normal_dg7lc_164{padding:24px}._normalVR_dg7lc_168{padding-top:24px;padding-bottom:24px}._normalHR_dg7lc_173{padding-left:24px;padding-right:24px}._normalTop_dg7lc_178{padding-top:24px}._normalRight_dg7lc_182{padding-right:24px}._normalBottom_dg7lc_186{padding-bottom:24px}._normalLeft_dg7lc_190{padding-left:24px}._large_dg7lc_194{padding:32px}._largeVR_dg7lc_198{padding-top:32px;padding-bottom:32px}._largeHR_dg7lc_203{padding-left:32px;padding-right:32px}._largeTop_dg7lc_208{padding-top:32px}._largeRight_dg7lc_212{padding-right:32px}._largeBottom_dg7lc_216{padding-bottom:32px}._largeLeft_dg7lc_220{padding-left:32px}._xLarge_dg7lc_224{padding:48px}._xLargeVR_dg7lc_228{padding-top:48px;padding-bottom:48px}._xLargeHR_dg7lc_233{padding-left:48px;padding-right:48px}._xLargeTop_dg7lc_238{padding-top:48px}._xLargeRight_dg7lc_242{padding-right:48px}._xLargeBottom_dg7lc_246{padding-bottom:48px}._xLargeLeft_dg7lc_250{padding-left:48px}._xxLarge_dg7lc_254{padding:56px}._xxLargeVR_dg7lc_258{padding-top:56px;padding-bottom:56px}._xxLargeHR_dg7lc_263{padding-left:56px;padding-right:56px}._xxLargeTop_dg7lc_268{padding-top:56px}._xxLargeRight_dg7lc_272{padding-right:56px}._xxLargeBottom_dg7lc_276{padding-bottom:56px}._xxLargeLeft_dg7lc_280{padding-left:56px}._extraLarge_dg7lc_284{padding:64px}._extraLargeVR_dg7lc_288{padding-top:64px;padding-bottom:64px}._extraLargeHR_dg7lc_293{padding-left:64px;padding-right:64px}._extraLargeTop_dg7lc_298{padding-top:64px}._extraLargeRight_dg7lc_302{padding-right:64px}._extraLargeBottom_dg7lc_306{padding-bottom:64px}._extraLargeLeft_dg7lc_310{padding-left:64px}._size_tiny_ldink_23,._size_tiny_ldink_23 *{font-size:12px}._size_small_ldink_27,._size_small_ldink_27 *{font-size:16px}._size_medium_ldink_31,._size_medium_ldink_31 *{font-size:18px}._size_large_ldink_35,._size_large_ldink_35 *{font-size:32px}._weight_thin_ldink_39,._weight_thin_ldink_39 *{font-weight:100}._weight_extraLight_ldink_43,._weight_extraLight_ldink_43 *{font-weight:200}._weight_light_ldink_47,._weight_light_ldink_47 *{font-weight:300}._weight_normal_ldink_51,._weight_normal_ldink_51 *{font-weight:400}._weight_medium_ldink_55,._weight_medium_ldink_55 *{font-weight:500}._weight_semiBold_ldink_59,._weight_semiBold_ldink_59 *{font-weight:600}._weight_bold_ldink_63,._weight_bold_ldink_63 *{font-weight:700}._weight_extraBold_ldink_67,._weight_extraBold_ldink_67 *{font-weight:800}._lineHeight_ldink_71{line-height:100%}._secondary_ldink_75{color:#8e8e8e}._modal_ib2ay_25{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:2147483649}._modal_ib2ay_25 ._background_ib2ay_36{position:absolute;top:0;left:0;width:100%;height:100%;transition:.3s;opacity:0;overflow:auto;background-color:color-mix(in srgb,#000000 60%,white 0%);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}._modal_ib2ay_25 ._window_ib2ay_48{min-width:280px;max-width:560px;background:#fff;border-radius:6px;padding:16px;z-index:1;position:relative;opacity:0;transform:scale(.01);transition:.3s;display:flex;flex-direction:column;box-shadow:0 2px 6px 2px #00000026,0 1px 2px #0000004d;overflow:auto}._modal_ib2ay_25 ._window_ib2ay_48 ._loading_ib2ay_64{position:absolute;width:100%;height:100%;top:0;left:0;background:#000000b3}._modal_ib2ay_25 ._window_ib2ay_48 ._loading_ib2ay_64 img{width:100px}._modal_visible_ib2ay_76 ._background_ib2ay_36{opacity:1}._modal_visible_ib2ay_76 ._window_ib2ay_48{opacity:1;transform:scale(1)}._modal_hidden_ib2ay_83 ._background_ib2ay_36{opacity:0}._modal_hidden_ib2ay_83 ._window_ib2ay_48{opacity:0;transform:scale(.01)}._modal_hiddenDone_ib2ay_90 ._background_ib2ay_36{opacity:0}._modal_hiddenDone_ib2ay_90 ._window_ib2ay_48{opacity:0;transform:scale(.01)}._color_13dyv_1{padding:0 8px;border-radius:8px;width:100%;box-shadow:0 0 7px -5px #000;font-weight:800;flex-shrink:0}
</style><meta id="dcngeagmmhegagicpcmpinaoklddcgon"><meta id="hcbeidgfmkgomnehecnfelbcppoifoee" name="Fiorilli Web Extension"><style>._button_10caf_25{border-radius:8px;border:unset;cursor:pointer;transition:.3s}._button_10caf_25:disabled{opacity:.3;cursor:not-allowed}._button_default_10caf_35{background:transparent;color:#43434e}._button_default_10caf_35:hover{background:#f3f4f7}._button_default_10caf_35:active{background:#8e8e8e}._button_default_10caf_35 ._svg_10caf_45 *{fill:#43434e}._button_primary_10caf_48{background:#007eff;color:#fff}._button_primary_10caf_48:hover{background:#3398ff}._button_primary_10caf_48:active{background:#66b2ff}._button_primary_10caf_48 ._svg_10caf_45 *{fill:#fff}._button_link_10caf_61{background:transparent;color:#007eff}._button_link_10caf_61:hover{color:#3398ff}._button_link_10caf_61:active{color:#66b2ff}._button_link_10caf_61 ._svg_10caf_45 *{fill:#007eff}._button_link_10caf_61 ._svg_10caf_45 *:hover{fill:#3398ff}._button_link_10caf_61 ._svg_10caf_45 *:active{fill:#66b2ff}._button_large_10caf_80{padding:12px 16px}._button_large_10caf_80 *{font-size:16px}._button_medium_10caf_86{padding:8px 16px}._button_medium_10caf_86 *{font-size:16px}._button_small_10caf_92{padding:4px;min-height:24px}._button_small_10caf_92 *{font-size:12px}._flexBox_9xdww_14{flex-flow:unset}._gap_extraTiny_9xdww_18{gap:2px}._gap_tiny_9xdww_22{gap:4px}._gap_extraSmall_9xdww_26{gap:6px}._gap_small_9xdww_30{gap:8px}._gap_medium_9xdww_34{gap:16px}._gap_normal_9xdww_38{gap:24px}._gap_large_9xdww_42{gap:32px}._gap_xLarge_9xdww_46{gap:48px}._gap_xxLarge_9xdww_50{gap:56px}._gap_extraLarge_9xdww_54{gap:64px}._column_9xdww_58{flex-direction:column!important}._flexWrap_9xdww_62{flex-wrap:wrap}._popover_12uvb_1{position:fixed;padding:8px 10px;z-index:2147483647;background:#31363de6;border-radius:4px;color:#fff;font-size:14px}._buttons_12uvb_11{position:fixed;top:0;right:0;padding:8px;z-index:2147483647}._popup_hcu7e_1{position:fixed;z-index:2147483649;background:#ffffffe6;border-radius:4px;color:#000;font-size:14px;line-height:1.286;width:350px;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);box-shadow:0 0 7px -5px #000}._popup_hcu7e_1:before{border-color:rgba(255,255,255,.9) transparent;border-width:0 7px 7px 7px;left:7px;top:-7px;border-style:solid;content:".";display:block;height:0;position:absolute;text-indent:-30000px;width:0}._color_hcu7e_27{width:20px;height:20px;cursor:pointer;flex-shrink:0}._styleContainer_hcu7e_34{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._extraTiny_dg7lc_14{padding:2px}._extraTinyVR_dg7lc_18{padding-top:2px;padding-bottom:2px}._extraTinyHR_dg7lc_23{padding-left:2px;padding-right:2px}._extraTinyTop_dg7lc_28{padding-top:2px}._extraTinyRight_dg7lc_32{padding-right:2px}._extraTinyBottom_dg7lc_36{padding-bottom:2px}._extraTinyLeft_dg7lc_40{padding-left:2px}._tiny_dg7lc_44{padding:4px}._tinyVR_dg7lc_48{padding-top:4px;padding-bottom:4px}._tinyHR_dg7lc_53{padding-left:4px;padding-right:4px}._tinyTop_dg7lc_58{padding-top:4px}._tinyRight_dg7lc_62{padding-right:4px}._tinyBottom_dg7lc_66{padding-bottom:4px}._tinyLeft_dg7lc_70{padding-left:4px}._extraSmall_dg7lc_74{padding:6px}._extraSmallVR_dg7lc_78{padding-top:6px;padding-bottom:6px}._extraSmallHR_dg7lc_83{padding-left:6px;padding-right:6px}._extraSmallTop_dg7lc_88{padding-top:6px}._extraSmallRight_dg7lc_92{padding-right:6px}._extraSmallBottom_dg7lc_96{padding-bottom:6px}._extraSmallLeft_dg7lc_100{padding-left:6px}._small_dg7lc_104{padding:8px}._smallVR_dg7lc_108{padding-top:8px;padding-bottom:8px}._smallHR_dg7lc_113{padding-left:8px;padding-right:8px}._smallTop_dg7lc_118{padding-top:8px}._smallRight_dg7lc_122{padding-right:8px}._smallBottom_dg7lc_126{padding-bottom:8px}._smallLeft_dg7lc_130{padding-left:8px}._medium_dg7lc_134{padding:16px}._mediumVR_dg7lc_138{padding-top:16px;padding-bottom:16px}._mediumHR_dg7lc_143{padding-left:16px;padding-right:16px}._mediumTop_dg7lc_148{padding-top:16px}._mediumRight_dg7lc_152{padding-right:16px}._mediumBottom_dg7lc_156{padding-bottom:16px}._mediumLeft_dg7lc_160{padding-left:16px}._normal_dg7lc_164{padding:24px}._normalVR_dg7lc_168{padding-top:24px;padding-bottom:24px}._normalHR_dg7lc_173{padding-left:24px;padding-right:24px}._normalTop_dg7lc_178{padding-top:24px}._normalRight_dg7lc_182{padding-right:24px}._normalBottom_dg7lc_186{padding-bottom:24px}._normalLeft_dg7lc_190{padding-left:24px}._large_dg7lc_194{padding:32px}._largeVR_dg7lc_198{padding-top:32px;padding-bottom:32px}._largeHR_dg7lc_203{padding-left:32px;padding-right:32px}._largeTop_dg7lc_208{padding-top:32px}._largeRight_dg7lc_212{padding-right:32px}._largeBottom_dg7lc_216{padding-bottom:32px}._largeLeft_dg7lc_220{padding-left:32px}._xLarge_dg7lc_224{padding:48px}._xLargeVR_dg7lc_228{padding-top:48px;padding-bottom:48px}._xLargeHR_dg7lc_233{padding-left:48px;padding-right:48px}._xLargeTop_dg7lc_238{padding-top:48px}._xLargeRight_dg7lc_242{padding-right:48px}._xLargeBottom_dg7lc_246{padding-bottom:48px}._xLargeLeft_dg7lc_250{padding-left:48px}._xxLarge_dg7lc_254{padding:56px}._xxLargeVR_dg7lc_258{padding-top:56px;padding-bottom:56px}._xxLargeHR_dg7lc_263{padding-left:56px;padding-right:56px}._xxLargeTop_dg7lc_268{padding-top:56px}._xxLargeRight_dg7lc_272{padding-right:56px}._xxLargeBottom_dg7lc_276{padding-bottom:56px}._xxLargeLeft_dg7lc_280{padding-left:56px}._extraLarge_dg7lc_284{padding:64px}._extraLargeVR_dg7lc_288{padding-top:64px;padding-bottom:64px}._extraLargeHR_dg7lc_293{padding-left:64px;padding-right:64px}._extraLargeTop_dg7lc_298{padding-top:64px}._extraLargeRight_dg7lc_302{padding-right:64px}._extraLargeBottom_dg7lc_306{padding-bottom:64px}._extraLargeLeft_dg7lc_310{padding-left:64px}._size_tiny_ldink_23,._size_tiny_ldink_23 *{font-size:12px}._size_small_ldink_27,._size_small_ldink_27 *{font-size:16px}._size_medium_ldink_31,._size_medium_ldink_31 *{font-size:18px}._size_large_ldink_35,._size_large_ldink_35 *{font-size:32px}._weight_thin_ldink_39,._weight_thin_ldink_39 *{font-weight:100}._weight_extraLight_ldink_43,._weight_extraLight_ldink_43 *{font-weight:200}._weight_light_ldink_47,._weight_light_ldink_47 *{font-weight:300}._weight_normal_ldink_51,._weight_normal_ldink_51 *{font-weight:400}._weight_medium_ldink_55,._weight_medium_ldink_55 *{font-weight:500}._weight_semiBold_ldink_59,._weight_semiBold_ldink_59 *{font-weight:600}._weight_bold_ldink_63,._weight_bold_ldink_63 *{font-weight:700}._weight_extraBold_ldink_67,._weight_extraBold_ldink_67 *{font-weight:800}._lineHeight_ldink_71{line-height:100%}._secondary_ldink_75{color:#8e8e8e}._modal_ib2ay_25{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:2147483649}._modal_ib2ay_25 ._background_ib2ay_36{position:absolute;top:0;left:0;width:100%;height:100%;transition:.3s;opacity:0;overflow:auto;background-color:color-mix(in srgb,#000000 60%,white 0%);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}._modal_ib2ay_25 ._window_ib2ay_48{min-width:280px;max-width:560px;background:#fff;border-radius:6px;padding:16px;z-index:1;position:relative;opacity:0;transform:scale(.01);transition:.3s;display:flex;flex-direction:column;box-shadow:0 2px 6px 2px #00000026,0 1px 2px #0000004d;overflow:auto}._modal_ib2ay_25 ._window_ib2ay_48 ._loading_ib2ay_64{position:absolute;width:100%;height:100%;top:0;left:0;background:#000000b3}._modal_ib2ay_25 ._window_ib2ay_48 ._loading_ib2ay_64 img{width:100px}._modal_visible_ib2ay_76 ._background_ib2ay_36{opacity:1}._modal_visible_ib2ay_76 ._window_ib2ay_48{opacity:1;transform:scale(1)}._modal_hidden_ib2ay_83 ._background_ib2ay_36{opacity:0}._modal_hidden_ib2ay_83 ._window_ib2ay_48{opacity:0;transform:scale(.01)}._modal_hiddenDone_ib2ay_90 ._background_ib2ay_36{opacity:0}._modal_hiddenDone_ib2ay_90 ._window_ib2ay_48{opacity:0;transform:scale(.01)}._color_13dyv_1{padding:0 8px;border-radius:8px;width:100%;box-shadow:0 0 7px -5px #000;font-weight:800;flex-shrink:0}
</style><meta id="dcngeagmmhegagicpcmpinaoklddcgon"><meta id="hcbeidgfmkgomnehecnfelbcppoifoee" name="Fiorilli Web Extension"><style>._button_10caf_25{border-radius:8px;border:unset;cursor:pointer;transition:.3s}._button_10caf_25:disabled{opacity:.3;cursor:not-allowed}._button_default_10caf_35{background:transparent;color:#43434e}._button_default_10caf_35:hover{background:#f3f4f7}._button_default_10caf_35:active{background:#8e8e8e}._button_default_10caf_35 ._svg_10caf_45 *{fill:#43434e}._button_primary_10caf_48{background:#007eff;color:#fff}._button_primary_10caf_48:hover{background:#3398ff}._button_primary_10caf_48:active{background:#66b2ff}._button_primary_10caf_48 ._svg_10caf_45 *{fill:#fff}._button_link_10caf_61{background:transparent;color:#007eff}._button_link_10caf_61:hover{color:#3398ff}._button_link_10caf_61:active{color:#66b2ff}._button_link_10caf_61 ._svg_10caf_45 *{fill:#007eff}._button_link_10caf_61 ._svg_10caf_45 *:hover{fill:#3398ff}._button_link_10caf_61 ._svg_10caf_45 *:active{fill:#66b2ff}._button_large_10caf_80{padding:12px 16px}._button_large_10caf_80 *{font-size:16px}._button_medium_10caf_86{padding:8px 16px}._button_medium_10caf_86 *{font-size:16px}._button_small_10caf_92{padding:4px;min-height:24px}._button_small_10caf_92 *{font-size:12px}._flexBox_9xdww_14{flex-flow:unset}._gap_extraTiny_9xdww_18{gap:2px}._gap_tiny_9xdww_22{gap:4px}._gap_extraSmall_9xdww_26{gap:6px}._gap_small_9xdww_30{gap:8px}._gap_medium_9xdww_34{gap:16px}._gap_normal_9xdww_38{gap:24px}._gap_large_9xdww_42{gap:32px}._gap_xLarge_9xdww_46{gap:48px}._gap_xxLarge_9xdww_50{gap:56px}._gap_extraLarge_9xdww_54{gap:64px}._column_9xdww_58{flex-direction:column!important}._flexWrap_9xdww_62{flex-wrap:wrap}._popover_12uvb_1{position:fixed;padding:8px 10px;z-index:2147483647;background:#31363de6;border-radius:4px;color:#fff;font-size:14px}._buttons_12uvb_11{position:fixed;top:0;right:0;padding:8px;z-index:2147483647}._popup_hcu7e_1{position:fixed;z-index:2147483649;background:#ffffffe6;border-radius:4px;color:#000;font-size:14px;line-height:1.286;width:350px;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);box-shadow:0 0 7px -5px #000}._popup_hcu7e_1:before{border-color:rgba(255,255,255,.9) transparent;border-width:0 7px 7px 7px;left:7px;top:-7px;border-style:solid;content:".";display:block;height:0;position:absolute;text-indent:-30000px;width:0}._color_hcu7e_27{width:20px;height:20px;cursor:pointer;flex-shrink:0}._styleContainer_hcu7e_34{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._extraTiny_dg7lc_14{padding:2px}._extraTinyVR_dg7lc_18{padding-top:2px;padding-bottom:2px}._extraTinyHR_dg7lc_23{padding-left:2px;padding-right:2px}._extraTinyTop_dg7lc_28{padding-top:2px}._extraTinyRight_dg7lc_32{padding-right:2px}._extraTinyBottom_dg7lc_36{padding-bottom:2px}._extraTinyLeft_dg7lc_40{padding-left:2px}._tiny_dg7lc_44{padding:4px}._tinyVR_dg7lc_48{padding-top:4px;padding-bottom:4px}._tinyHR_dg7lc_53{padding-left:4px;padding-right:4px}._tinyTop_dg7lc_58{padding-top:4px}._tinyRight_dg7lc_62{padding-right:4px}._tinyBottom_dg7lc_66{padding-bottom:4px}._tinyLeft_dg7lc_70{padding-left:4px}._extraSmall_dg7lc_74{padding:6px}._extraSmallVR_dg7lc_78{padding-top:6px;padding-bottom:6px}._extraSmallHR_dg7lc_83{padding-left:6px;padding-right:6px}._extraSmallTop_dg7lc_88{padding-top:6px}._extraSmallRight_dg7lc_92{padding-right:6px}._extraSmallBottom_dg7lc_96{padding-bottom:6px}._extraSmallLeft_dg7lc_100{padding-left:6px}._small_dg7lc_104{padding:8px}._smallVR_dg7lc_108{padding-top:8px;padding-bottom:8px}._smallHR_dg7lc_113{padding-left:8px;padding-right:8px}._smallTop_dg7lc_118{padding-top:8px}._smallRight_dg7lc_122{padding-right:8px}._smallBottom_dg7lc_126{padding-bottom:8px}._smallLeft_dg7lc_130{padding-left:8px}._medium_dg7lc_134{padding:16px}._mediumVR_dg7lc_138{padding-top:16px;padding-bottom:16px}._mediumHR_dg7lc_143{padding-left:16px;padding-right:16px}._mediumTop_dg7lc_148{padding-top:16px}._mediumRight_dg7lc_152{padding-right:16px}._mediumBottom_dg7lc_156{padding-bottom:16px}._mediumLeft_dg7lc_160{padding-left:16px}._normal_dg7lc_164{padding:24px}._normalVR_dg7lc_168{padding-top:24px;padding-bottom:24px}._normalHR_dg7lc_173{padding-left:24px;padding-right:24px}._normalTop_dg7lc_178{padding-top:24px}._normalRight_dg7lc_182{padding-right:24px}._normalBottom_dg7lc_186{padding-bottom:24px}._normalLeft_dg7lc_190{padding-left:24px}._large_dg7lc_194{padding:32px}._largeVR_dg7lc_198{padding-top:32px;padding-bottom:32px}._largeHR_dg7lc_203{padding-left:32px;padding-right:32px}._largeTop_dg7lc_208{padding-top:32px}._largeRight_dg7lc_212{padding-right:32px}._largeBottom_dg7lc_216{padding-bottom:32px}._largeLeft_dg7lc_220{padding-left:32px}._xLarge_dg7lc_224{padding:48px}._xLargeVR_dg7lc_228{padding-top:48px;padding-bottom:48px}._xLargeHR_dg7lc_233{padding-left:48px;padding-right:48px}._xLargeTop_dg7lc_238{padding-top:48px}._xLargeRight_dg7lc_242{padding-right:48px}._xLargeBottom_dg7lc_246{padding-bottom:48px}._xLargeLeft_dg7lc_250{padding-left:48px}._xxLarge_dg7lc_254{padding:56px}._xxLargeVR_dg7lc_258{padding-top:56px;padding-bottom:56px}._xxLargeHR_dg7lc_263{padding-left:56px;padding-right:56px}._xxLargeTop_dg7lc_268{padding-top:56px}._xxLargeRight_dg7lc_272{padding-right:56px}._xxLargeBottom_dg7lc_276{padding-bottom:56px}._xxLargeLeft_dg7lc_280{padding-left:56px}._extraLarge_dg7lc_284{padding:64px}._extraLargeVR_dg7lc_288{padding-top:64px;padding-bottom:64px}._extraLargeHR_dg7lc_293{padding-left:64px;padding-right:64px}._extraLargeTop_dg7lc_298{padding-top:64px}._extraLargeRight_dg7lc_302{padding-right:64px}._extraLargeBottom_dg7lc_306{padding-bottom:64px}._extraLargeLeft_dg7lc_310{padding-left:64px}._size_tiny_ldink_23,._size_tiny_ldink_23 *{font-size:12px}._size_small_ldink_27,._size_small_ldink_27 *{font-size:16px}._size_medium_ldink_31,._size_medium_ldink_31 *{font-size:18px}._size_large_ldink_35,._size_large_ldink_35 *{font-size:32px}._weight_thin_ldink_39,._weight_thin_ldink_39 *{font-weight:100}._weight_extraLight_ldink_43,._weight_extraLight_ldink_43 *{font-weight:200}._weight_light_ldink_47,._weight_light_ldink_47 *{font-weight:300}._weight_normal_ldink_51,._weight_normal_ldink_51 *{font-weight:400}._weight_medium_ldink_55,._weight_medium_ldink_55 *{font-weight:500}._weight_semiBold_ldink_59,._weight_semiBold_ldink_59 *{font-weight:600}._weight_bold_ldink_63,._weight_bold_ldink_63 *{font-weight:700}._weight_extraBold_ldink_67,._weight_extraBold_ldink_67 *{font-weight:800}._lineHeight_ldink_71{line-height:100%}._secondary_ldink_75{color:#8e8e8e}._modal_ib2ay_25{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:2147483649}._modal_ib2ay_25 ._background_ib2ay_36{position:absolute;top:0;left:0;width:100%;height:100%;transition:.3s;opacity:0;overflow:auto;background-color:color-mix(in srgb,#000000 60%,white 0%);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}._modal_ib2ay_25 ._window_ib2ay_48{min-width:280px;max-width:560px;background:#fff;border-radius:6px;padding:16px;z-index:1;position:relative;opacity:0;transform:scale(.01);transition:.3s;display:flex;flex-direction:column;box-shadow:0 2px 6px 2px #00000026,0 1px 2px #0000004d;overflow:auto}._modal_ib2ay_25 ._window_ib2ay_48 ._loading_ib2ay_64{position:absolute;width:100%;height:100%;top:0;left:0;background:#000000b3}._modal_ib2ay_25 ._window_ib2ay_48 ._loading_ib2ay_64 img{width:100px}._modal_visible_ib2ay_76 ._background_ib2ay_36{opacity:1}._modal_visible_ib2ay_76 ._window_ib2ay_48{opacity:1;transform:scale(1)}._modal_hidden_ib2ay_83 ._background_ib2ay_36{opacity:0}._modal_hidden_ib2ay_83 ._window_ib2ay_48{opacity:0;transform:scale(.01)}._modal_hiddenDone_ib2ay_90 ._background_ib2ay_36{opacity:0}._modal_hiddenDone_ib2ay_90 ._window_ib2ay_48{opacity:0;transform:scale(.01)}._color_13dyv_1{padding:0 8px;border-radius:8px;width:100%;box-shadow:0 0 7px -5px #000;font-weight:800;flex-shrink:0}
</style><meta id="dcngeagmmhegagicpcmpinaoklddcgon"><meta id="hcbeidgfmkgomnehecnfelbcppoifoee" name="Fiorilli Web Extension"></head>
<body class="admin-mode-disabled admin-mode">

    <header>
        <h1>Meus Atalhos Essenciais</h1>
        
        <div id="admin-auth-box" class="">
            <span id="admin-status">ADMIN</span>
            <input type="password" id="admin-password-input" placeholder="Senha" style="display: none;">
            <button id="admin-login-btn">Sair do Modo Admin</button>
            <button id="admin-auth-btn" style="display: none;">Entrar</button>
        </div>
    </header>

    <div id="top-controls">
        <div id="admin-form-container" class="link-form-container active">
            <h3>Gerenciar Links Padrão (Fixos)</h3>
            <form id="admin-add-link-form" class="link-form">
                <input type="text" id="admin-link-input" placeholder="URL: www.fixo.com" required="">
                <input type="text" id="admin-label-input" placeholder="Nome Fixo" required="">
                <select id="admin-category-select" required=""><option value="Ferramentas">Ferramentas</option><option value="Redes Sociais">Redes Sociais</option></select>
                <button type="submit">Salvar Link Padrão</button>
            </form>

            <div id="generator-box">
                <button id="generator-btn">Gerar Código Final (Copiar e Salvar)</button>
                <textarea id="output-code" placeholder="O código HTML completo aparecerá aqui após clicar no botão."></textarea>
            </div>

        </div>
    </div>
    
    <div id="tab-container">
        <div id="tabs"><button class="tab-button active">Ferramentas</button><button class="tab-button">Redes Sociais</button></div>
        <main id="links-container"><a href="https://lukasnovais.github.io/Frete-ICMS/" target="_blank" class="link-item" data-type="admin" data-index="0" draggable="true"><span class="link-label">Calc. Frete ICMS</span><button class="delete-btn">X</button></a><a href="https://lukasnovais.github.io/PRIME-COTACAO/" target="_blank" class="link-item" data-type="admin" data-index="1" draggable="true"><span class="link-label">Calcular FRETE</span><button class="delete-btn">X</button></a><a href="http://tescan.tcn.dns-cloud.net:8083/index.aspx?empresa=001&amp;filial=01&amp;codmotorista=041625931&amp;carga=S&amp;descargaProgramada=S" target="_blank" class="link-item" data-type="admin" data-index="2" draggable="true"><span class="link-label">Tescan TV</span><button class="delete-btn">X</button></a><a href="https://petrow.com.br/dtc_canedo/" target="_blank" class="link-item" data-type="admin" data-index="3" draggable="true"><span class="link-label">DTC TV</span><button class="delete-btn">X</button></a><a href="https://drive.google.com/drive/folders/18jYYeHxC4n0wjrpVVismiS8aQjg7RECK" target="_blank" class="link-item" data-type="admin" data-index="4" draggable="true"><span class="link-label">Compartilhado</span><button class="delete-btn">X</button></a><a href="https://sites.redeipiranga.com.br/WAAgendamento/usuario/login" target="_blank" class="link-item" data-type="admin" data-index="5" draggable="true"><span class="link-label">Portal Ipiranga</span><button class="delete-btn">X</button></a><a href="https://portal.meioambiente.go.gov.br/portal/login.mago;jsessionid=6428FA01633B20843782506C083C240F" target="_blank" class="link-item" data-type="admin" data-index="6" draggable="true"><span class="link-label">Portal IPE</span><button class="delete-btn">X</button></a><a href="https://servicos.ibama.gov.br/ctfcd/sistema.php" target="_blank" class="link-item" data-type="admin" data-index="7" draggable="true"><span class="link-label">Ibama</span><button class="delete-btn">X</button></a><a href="https://cronotacografo.rbmlq.gov.br/certificados/consultar" target="_blank" class="link-item" data-type="admin" data-index="8" draggable="true"><span class="link-label">Tacografo</span><button class="delete-btn">X</button></a><a href="https://transtrackrastreamento.com.br/login/index.php" target="_blank" class="link-item" data-type="admin" data-index="9" draggable="true"><span class="link-label">TransTrack</span><button class="delete-btn">X</button></a><a href="https://srv.sigasat.com.br/dev/" target="_blank" class="link-item" data-type="admin" data-index="10" draggable="true"><span class="link-label">SigaSAT</span><button class="delete-btn">X</button></a><a href="https://fulltrackapp.com/emp/16198-impacto" target="_blank" class="link-item" data-type="admin" data-index="11" draggable="true"><span class="link-label">THIAGO JYI2I43</span><button class="delete-btn">X</button></a><a href="https://livemonitor.rio.cloud/#/map/b6f2ead6-9e75-4303-9680-b087fe4da148?assetIds=b6f2ead6-9e75-4303-9680-b087fe4da148&amp;lat=-16.70414240021545&amp;lng=-49.10889102281655&amp;z=16" target="_blank" class="link-item" data-type="admin" data-index="12" draggable="true"><span class="link-label">20V SDH6G89</span><button class="delete-btn">X</button></a><a href="https://gyncontrol.com.br/sistema" target="_blank" class="link-item" data-type="admin" data-index="13" draggable="true"><span class="link-label">MARA OQF2B60</span><button class="delete-btn">X</button></a><a href="https://pooltrack.logicasolucoes.com.br/login/login" target="_blank" class="link-item" data-type="admin" data-index="14" draggable="true"><span class="link-label">OSMAR OWO6F37</span><button class="delete-btn">X</button></a><a href="https://cn.vibraenergia.com.br/login/logout" target="_blank" class="link-item" data-type="admin" data-index="15" draggable="true"><span class="link-label">Portal BR</span><button class="delete-btn">X</button></a></main>
    </div>
    
    <script>
        // --- CHAVES PARA ARMAZENAMENTO LOCAL ---
        const ADMIN_LINKS_KEY = 'admin_links_padrao_v3'; 
        const ADMIN_PASSWORD = 'prime.admin'; 
        const CATEGORIES = ['Ferramentas', 'Redes Sociais']; 
        
        // ** AQUI FICA A LISTA DE LINKS PADRÃO EMBUTIDA NO HTML **
        // Se a lista no localStorage estiver vazia, o sistema usa esta lista.
        // Copie a lista JSON atualizada do console (Passo 1. Exportar) e cole aqui.
        const DEFAULT_LINKS_JSON = '[{"url":"https://lukasnovais.github.io/Frete-ICMS/","label":"Calc. Frete ICMS","category":"Ferramentas","type":"admin"},{"url":"https://lukasnovais.github.io/PRIME-COTACAO/","label":"Calcular FRETE","category":"Ferramentas","type":"admin"},{"url":"http://tescan.tcn.dns-cloud.net:8083/index.aspx?empresa=001&filial=01&codmotorista=041625931&carga=S&descargaProgramada=S","label":"Tescan TV","category":"Ferramentas","type":"admin"},{"url":"https://petrow.com.br/dtc_canedo/","label":"DTC TV","category":"Ferramentas","type":"admin"},{"url":"https://drive.google.com/drive/folders/18jYYeHxC4n0wjrpVVismiS8aQjg7RECK","label":"Compartilhado","category":"Ferramentas","type":"admin"},{"url":"https://sites.redeipiranga.com.br/WAAgendamento/usuario/login","label":"Portal Ipiranga","category":"Ferramentas","type":"admin"},{"url":"https://portal.meioambiente.go.gov.br/portal/login.mago;jsessionid=6428FA01633B20843782506C083C240F","label":"Portal IPE","category":"Ferramentas","type":"admin"},{"url":"https://servicos.ibama.gov.br/ctfcd/sistema.php","label":"Ibama","category":"Ferramentas","type":"admin"},{"url":"https://cronotacografo.rbmlq.gov.br/certificados/consultar","label":"Tacografo","category":"Ferramentas","type":"admin"},{"url":"https://transtrackrastreamento.com.br/login/index.php","label":"TransTrack","category":"Ferramentas","type":"admin"},{"url":"https://srv.sigasat.com.br/dev/","label":"SigaSAT","category":"Ferramentas","type":"admin"},{"url":"https://fulltrackapp.com/emp/16198-impacto","label":"THIAGO JYI2I43","category":"Ferramentas","type":"admin"},{"url":"https://livemonitor.rio.cloud/#/map/b6f2ead6-9e75-4303-9680-b087fe4da148?assetIds=b6f2ead6-9e75-4303-9680-b087fe4da148&lat=-16.70414240021545&lng=-49.10889102281655&z=16","label":"20V SDH6G89","category":"Ferramentas","type":"admin"},{"url":"https://gyncontrol.com.br/sistema","label":"MARA OQF2B60","category":"Ferramentas","type":"admin"},{"url":"https://pooltrack.logicasolucoes.com.br/login/login","label":"OSMAR OWO6F37","category":"Ferramentas","type":"admin"},{"url":"https://cn.vibraenergia.com.br/login/logout","label":"Portal BR","category":"Ferramentas","type":"admin"}]';
        // -----------------------------------------------------------

        // --- Variáveis DOM e de Estado ---
        const linksContainer = document.getElementById('links-container');
        const tabsContainer = document.getElementById('tabs');
        const adminFormContainer = document.getElementById('admin-form-container');
        const adminAddForm = document.getElementById('admin-add-link-form');
        const adminLoginBtn = document.getElementById('admin-login-btn');
        const adminAuthBtn = document.getElementById('admin-auth-btn');
        const adminPasswordInput = document.getElementById('admin-password-input');
        const adminAuthBox = document.getElementById('admin-auth-box');
        const adminStatus = document.getElementById('admin-status');
        const generatorBtn = document.getElementById('generator-btn'); // Novo
        const outputCodeArea = document.getElementById('output-code'); // Novo
        
        let activeCategory = '';
        let isAdmin = false;
        let draggedItem = null; 

        // ----------------------------------------
        // 1. FUNÇÕES DE ACESSO AO LOCALSTORAGE
        // ----------------------------------------
        
        function loadAdminLinks() {
            const storedLinks = localStorage.getItem(ADMIN_LINKS_KEY);
            // Se não houver nada no localStorage, ele usa o JSON embutido
            return storedLinks ? JSON.parse(storedLinks) : JSON.parse(DEFAULT_LINKS_JSON);
        }

        function saveAdminLinks(links) {
            localStorage.setItem(ADMIN_LINKS_KEY, JSON.stringify(links));
        }

        // ----------------------------------------
        // 2. FUNÇÃO DE GERAÇÃO AUTOMÁTICA DE CÓDIGO (NOVO)
        // ----------------------------------------
        
        function generateFinalHtml() {
            const currentLinks = loadAdminLinks();
            const newJsonString = JSON.stringify(currentLinks);
            
            // Pega o código HTML atual (do body) para manter o layout e estilos
            let templateHtml = document.documentElement.outerHTML;

            // Encontra a linha de código onde o DEFAULT_LINKS_JSON está definido
            const regex = /(const\s+DEFAULT_LINKS_JSON\s+=\s+')([^']+?)(';)/;
            
            // Substitui o JSON antigo pelo novo JSON serializado
            const newHtml = templateHtml.replace(regex, `$1${newJsonString}$3`);

            outputCodeArea.value = newHtml;
            outputCodeArea.select();
            
            try {
                // Tenta copiar para a área de transferência
                document.execCommand('copy');
                generatorBtn.textContent = 'Copiado para a área de transferência! (Substitua no seu host)';
                setTimeout(() => {
                    generatorBtn.textContent = 'Gerar Código Final (Copiar e Salvar)';
                }, 3000);
            } catch (err) {
                // Se a cópia falhar (permissões), apenas avisa o usuário
                generatorBtn.textContent = 'Código gerado. Copie o texto da caixa e substitua no seu host!';
            }
        }
        
        // ----------------------------------------
        // 3. LÓGICA DE DRAG AND DROP
        // ----------------------------------------
        
        function handleDragStart(e) {
            if (!isAdmin) {
                e.preventDefault();
                return;
            }
            draggedItem = e.target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', e.target.dataset.index);
            setTimeout(() => {
                e.target.classList.add('dragging');
            }, 0);
        }

        function handleDragEnd(e) {
            e.target.classList.remove('dragging');
            linksContainer.querySelectorAll('.drop-target-above, .drop-target-below').forEach(el => {
                el.classList.remove('drop-target-above', 'drop-target-below');
            });
            draggedItem = null;
        }

        function handleDragOver(e) {
            if (!isAdmin) return;
            e.preventDefault();
            
            const target = e.target.closest('.link-item');
            if (!target || target === draggedItem) return;

            linksContainer.querySelectorAll('.drop-target-above, .drop-target-below').forEach(el => {
                el.classList.remove('drop-target-above', 'drop-target-below');
            });
            
            const rect = target.getBoundingClientRect();
            const midpoint = rect.y + rect.height / 2;

            if (e.clientY < midpoint) {
                target.classList.add('drop-target-above');
            } else {
                target.classList.add('drop-target-below');
            }
        }

        function handleDrop(e) {
            if (!isAdmin) return;
            e.preventDefault();
            
            const target = e.target.closest('.link-item');
            if (!target || target === draggedItem) return;

            const draggedIndex = parseInt(draggedItem.dataset.index);
            let targetIndex = parseInt(target.dataset.index);
            
            let links = loadAdminLinks();
            
            const activeLinks = links.filter(link => link.category === activeCategory);
            
            const originalDraggedIndex = links.findIndex(link => link.url === activeLinks[draggedIndex].url);
            const originalTargetIndex = links.findIndex(link => link.url === activeLinks[targetIndex].url);

            if (originalDraggedIndex === -1 || originalTargetIndex === -1) return;

            const [movedLink] = links.splice(originalDraggedIndex, 1);
            
            let dropPosition = originalTargetIndex;
            if (target.classList.contains('drop-target-below')) {
                dropPosition = originalTargetIndex + 1;
            }

            if (dropPosition > links.length) {
                links.push(movedLink);
            } else {
                links.splice(dropPosition, 0, movedLink);
            }

            saveAdminLinks(links);
            renderLinks(activeCategory);
            outputCodeArea.value = 'Links alterados. Clique em "Gerar Código Final" para salvar a nova ordem.'; // Avisa para gerar novo código
        }


        // ----------------------------------------
        // 4. LÓGICA DE EXIBIÇÃO E GERENCIAMENTO
        // ----------------------------------------

        function updateAdminMode(status) {
            isAdmin = status;
            document.body.classList.toggle('admin-mode', status); 
            adminLoginBtn.textContent = status ? 'Sair do Modo Admin' : 'Acesso Admin';
            adminStatus.textContent = status ? 'ADMIN' : '';
            adminFormContainer.classList.toggle('active', status);

            adminAuthBox.classList.remove('active');
            adminPasswordInput.style.display = 'none';
            adminAuthBtn.style.display = 'none';
            adminPasswordInput.value = '';
            outputCodeArea.value = ''; // Limpa a área de código ao entrar/sair

            renderLinks(activeCategory);
        }
        
        function createLinkItem(linkData, index) {
            const { url, label, type } = linkData;
            
            const link = document.createElement('a');
            link.href = url;
            link.target = "_blank";
            link.classList.add('link-item');
            link.setAttribute('data-type', type);
            link.setAttribute('data-index', index); 
            
            if (isAdmin) {
                link.setAttribute('draggable', 'true');
                link.addEventListener('dragstart', handleDragStart);
                link.addEventListener('dragend', handleDragEnd);
                link.addEventListener('dragover', handleDragOver);
                link.addEventListener('dragleave', (e) => {
                    e.target.closest('.link-item').classList.remove('drop-target-above', 'drop-target-below');
                });
                link.addEventListener('drop', handleDrop);
            }
            
            const span = document.createElement('span');
            span.classList.add('link-label');
            span.textContent = label;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                if (!isAdmin) {
                    alert('Apenas o Administrador pode excluir links padrão.');
                    return;
                }
                
                if (confirm(`Remover o link fixo "${label}"?`)) {
                    handleDeleteAdminLink(index);
                }
            });

            link.appendChild(span);
            link.appendChild(deleteBtn);

            return link;
        }

        function handleDeleteAdminLink(indexToDelete) {
            let links = loadAdminLinks();
            
            const activeLinks = links.filter(link => link.category === activeCategory);
            const linkToDelete = activeLinks[indexToDelete];
            
            const indexToRemove = links.findIndex(link => link.url === linkToDelete.url && link.category === linkToDelete.category);
            if (indexToRemove > -1) {
                links.splice(indexToRemove, 1);
            }

            saveAdminLinks(links);
            renderLinks(activeCategory);
            outputCodeArea.value = 'Links alterados. Clique em "Gerar Código Final" para salvar a nova ordem.'; // Avisa para gerar novo código
        }
        
        function renderLinks(category) {
            activeCategory = category;
            linksContainer.innerHTML = '';
            
            const allLinks = loadAdminLinks();
            const adminLinks = allLinks.filter(link => link.category === category);

            adminLinks.forEach((linkData, index) => {
                const item = createLinkItem(linkData, index);
                linksContainer.appendChild(item);
            });
            
            if (adminLinks.length === 0) {
                 linksContainer.innerHTML = `<p style="width: 100%; text-align: center; color: #777;">Nenhum atalho encontrado na categoria "${category}".</p>`;
            }

            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.toggle('active', btn.textContent === category);
            });
        }
        
        function initializeCategories() {
            const adminSelect = document.getElementById('admin-category-select');
            
            tabsContainer.innerHTML = '';
            adminSelect.innerHTML = '';
            
            CATEGORIES.forEach(category => {
                const tabBtn = document.createElement('button');
                tabBtn.textContent = category;
                tabBtn.classList.add('tab-button');
                tabBtn.addEventListener('click', () => renderLinks(category));
                tabsContainer.appendChild(tabBtn);
                
                adminSelect.insertAdjacentHTML('beforeend', `<option value="${category}">${category}</option>`);
            });
            
            activeCategory = CATEGORIES[0];
        }

        // ----------------------------------------
        // 5. LISTENERS DE EVENTOS (FORMULÁRIOS E ADMIN)
        // ----------------------------------------

        function handleAddLink(event) {
            event.preventDefault();
            
            if (!isAdmin) return;

            const form = event.target;
            const url = form.querySelector('input[placeholder^="URL"]').value.trim();
            const label = form.querySelector('input[placeholder^="Nome"]').value.trim();
            const categorySelected = form.querySelector('select').value;

            if (url && label && categorySelected) {
                let finalUrl = (url.startsWith('http') ? url : 'https://' + url);
                
                let links = loadAdminLinks();
                if (!links.some(link => link.url === finalUrl)) {
                    links.push({ url: finalUrl, label: label, category: categorySelected, type: 'admin' });
                    saveAdminLinks(links);
                    renderLinks(categorySelected);
                    form.reset();
                    outputCodeArea.value = 'Novo link adicionado. Clique em "Gerar Código Final" para salvar a alteração.'; // Avisa para gerar novo código
                } else {
                    alert('Link fixo já existe!');
                }
            }
        }
        
        adminAddForm.addEventListener('submit', handleAddLink);
        generatorBtn.addEventListener('click', generateFinalHtml); // NOVO LISTENER

        // --- Lógica de Login Admin ---
        adminLoginBtn.addEventListener('click', () => {
            if (isAdmin) {
                updateAdminMode(false);
            } else {
                adminAuthBox.classList.add('active');
                adminPasswordInput.style.display = 'block';
                adminAuthBtn.style.display = 'block';
                adminPasswordInput.focus();
            }
        });

        adminAuthBtn.addEventListener('click', () => {
            const password = adminPasswordInput.value;
            if (password === ADMIN_PASSWORD) {
                updateAdminMode(true);
            } else {
                alert("Senha incorreta!");
                adminPasswordInput.value = '';
                adminPasswordInput.focus();
            }
        });
        
        adminPasswordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                adminAuthBtn.click();
            }
        });

        // --- Inicialização ---
        document.addEventListener('DOMContentLoaded', () => {
            initializeCategories();
            renderLinks(activeCategory);
            updateAdminMode(false);
        });

    </script>


<div></div>
<div></div>
</body><div></div></html>
